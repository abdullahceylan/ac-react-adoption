import React, { useState } from 'react';
import PropTypes from 'prop-types';
import matchSorter from 'match-sorter';
import Downshift from 'downshift';
import {
  Menu,
  ControllerButton,
  SelectBoxContainer,
  InputWrapper,
  Input,
  Item,
  ItemIcon,
  SelectedItemIcon,
  ArrowIcon,
  XIcon,
} from './SelectBox.styles';

const SelectInput = ({ itemToString, items, width, height, ...rest }) => {
  return (
    <Downshift itemToString={itemToString} {...rest}>
      {({
        getRootProps,
        getInputProps,
        getToggleButtonProps,
        getItemProps,
        isOpen,
        toggleMenu,
        clearSelection,
        selectedItem,
        inputValue,
        highlightedIndex,
      }) => (
        <SelectBoxContainer
          width={width}
          height={height}
          {...getRootProps({
            refKey: 'forwardRef',
          })}
        >
          <InputWrapper>
            {selectedItem && selectedItem.iconURL && (
              <SelectedItemIcon
                src={
                  selectedItem.iconURLSelected
                    ? selectedItem.iconURLSelected
                    : selectedItem.iconURL
                }
                alt={itemToString(selectedItem)}
              />
            )}
            <Input
              {...getInputProps({
                isOpen,
                placeholder: rest.placeholder
                  ? rest.placeholder
                  : 'Please select',
              })}
              width={width}
              height={height}
              hasIcon={selectedItem && selectedItem.iconURL ? true : false}
            />
            {selectedItem ? (
              <ControllerButton
                style={{ paddingTop: 4 }}
                onClick={clearSelection}
                aria-label="clear selection"
              >
                <XIcon />
              </ControllerButton>
            ) : (
              <ControllerButton {...getToggleButtonProps()}>
                <ArrowIcon isOpen={isOpen} />
              </ControllerButton>
            )}
          </InputWrapper>
          {!isOpen ? null : (
            <Menu width={width}>
              {items.map((item, index) => (
                <Item
                  key={item.id}
                  {...getItemProps({
                    item,
                    index,
                    isActive: highlightedIndex === index,
                    isSelected: selectedItem === item,
                  })}
                >
                  {item.iconURL && (
                    <ItemIcon src={item.iconURL} alt={itemToString(item)} />
                  )}
                  {itemToString(item)}
                </Item>
              ))}
            </Menu>
          )}
        </SelectBoxContainer>
      )}
    </Downshift>
  );
};

const SelectBox = ({ items, width, height, placeholder, onChangeCallback, ...rest }) => {
  // console.log('items', items);
  // items = animals.map(s => ({ name: s, id: s.toLowerCase() }));
  if (!Array.isArray(items) || items.length <= 0) {
    return null;
  }

  const finalItems = items.map(s => ({ ...s, id: s.id ? s.id.toLowerCase() : s.value.toLowerCase() }));

  const [isOpen, setToggle] = useState(false);
  const [itemsToShow, setItems] = useState([]);

  const handleStateChange = (changes, downshiftState) => {
    if (changes.hasOwnProperty('isOpen')) {
      // downshift is saying that isOpen should change, so let's change it...
      const isStatesEqual = changes.type === Downshift.stateChangeTypes.mouseUp;

      setToggle(
        isStatesEqual
          ? isOpen
          : changes.isOpen,
      );

      if (!isStatesEqual && changes.isOpen) {
        // if the menu is going to be open, then we should limit the results
        // by what the user has typed in, otherwise, we'll leave them as they
        // were last...
        setItems(getItemsToShow(downshiftState.inputValue));
      }
    } else if (changes.hasOwnProperty('inputValue')) {
      // downshift is saying that the inputValue is changing. Since we don't
      // control that, we'll just use that information to update the items
      // that we should show.
      setItems(getItemsToShow(downshiftState.inputValue));
    }
  };

  const handleChange = (selectedItem, downshiftState) => {
    // handle the new selectedItem here
    return onChangeCallback(selectedItem, downshiftState)
  };

  const handleToggleButtonClick = () => {
    setTogle(!isOpen);
    setItems(finalItems);
  };

  const getItemsToShow = value => {
    return value
      ? matchSorter(finalItems, value, {
          keys: ['label'],
        })
      : finalItems;
  };

  const itemToString = i => (i ? i.label : '');

  return (
    <SelectInput
      onStateChange={handleStateChange}
      isOpen={isOpen}
      onChange={handleChange}
      items={itemsToShow}
      itemToString={itemToString}
      width={width}
      height={height}
      placeholder={placeholder}
    />
  );
};

SelectBox.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array
  ]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  placeholder: PropTypes.string,
  onChangeCallback: PropTypes.function,
};

SelectBox.defaultProps = {
  width: 250,
  height: 44,
  placeholder: 'Please select',
  onChangeCallback: () => {}
}

export default SelectBox;
