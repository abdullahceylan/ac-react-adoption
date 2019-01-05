import React from 'react';
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

class SelectBox extends React.Component {
  // items = animals.map(s => ({ name: s, id: s.toLowerCase() }));
  items = Array.isArray(this.props.items) ? this.props.items : [];
  state = { isOpen: false, itemsToShow: [] };

  handleStateChange = (changes, downshiftState) => {
    if (changes.hasOwnProperty('isOpen')) {
      // downshift is saying that isOpen should change, so let's change it...
      this.setState(({ isOpen, itemsToShow }) => {
        // if it's changing because the user's clicking outside of the downshift
        // component, then we actually don't want to change the isOpen state
        isOpen =
          changes.type === Downshift.stateChangeTypes.mouseUp
            ? isOpen
            : changes.isOpen;
        if (isOpen) {
          // if the menu is going to be open, then we should limit the results
          // by what the user has typed in, otherwise, we'll leave them as they
          // were last...
          itemsToShow = this.getItemsToShow(downshiftState.inputValue);
        }
        return { isOpen, itemsToShow };
      });
    } else if (changes.hasOwnProperty('inputValue')) {
      // downshift is saying that the inputValue is changing. Since we don't
      // control that, we'll just use that information to update the items
      // that we should show.
      this.setState({
        itemsToShow: this.getItemsToShow(downshiftState.inputValue),
      });
    }
  };

  handleChange = (selectedItem, downshiftState) => {
    // handle the new selectedItem here
  };

  handleToggleButtonClick = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
      itemsToShow: this.items,
    }));
  };

  getItemsToShow(value) {
    return value
      ? matchSorter(this.items, value, {
          keys: ['name'],
        })
      : this.items;
  }

  itemToString(i) {
    return i ? i.name : '';
  }
  
  render() {
    if (this.items.length <= 0) {
      return null;
    }
    const { width, height, placeholder, ...rest } = this.props;
    const { isOpen, itemsToShow } = this.state;
    return (
      <SelectInput
        onStateChange={this.handleStateChange}
        isOpen={isOpen}
        onChange={this.handleChange}
        items={itemsToShow}
        itemToString={this.itemToString}
        width={width}
        height={height}
        placeholder={placeholder}
      />
    );
  }
}

export default SelectBox;
