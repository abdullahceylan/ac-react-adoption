import { styled, ifProp, prop, css } from '@styles';

const DEFAULT_WIDTH = 250;
const DEFAULT_HEIGHT = 32;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const Item = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: none;
  height: auto;
  text-align: left;
  border-top: none;
  line-height: 1.4em;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.8rem;
  text-transform: none;
  font-weight: 400;
  box-shadow: none;
  padding: 0.8rem 1.1rem;

  ${ifProp(
    { isActive: true },
    css`
      color: rgba(0, 0, 0, 0.95);
      background: rgba(0, 0, 0, 0.03);
    `,
  )}
  ${ifProp(
    { isSelected: true },
    css`
      color: rgba(0, 0, 0, 0.95);
      font-weight: 700;
    `,
  )}
`;

export const ItemIcon = styled.img`
  height: 16px;
  margin-right: 10px;
`;

export const SelectedItemIcon = styled.img`
  height: 24px;
  z-index: 2;
  position: absolute;
  left: 12px;
`;

export const Input = styled.input`
  width: ${prop(
    'width',
    DEFAULT_WIDTH,
  )}px; /* full width - icon width/2 - border*/
  height: ${prop('height', DEFAULT_HEIGHT)}px;
  min-height: 2em;
  font-size: 14px;
  word-wrap: break-word;
  line-height: 1em;
  outline: 0;
  background: #fff;
  padding: 0.5em 2em 0.5em 1em;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.3rem;
  transition: box-shadow 0.1s ease, width 0.1s ease;
  &:hover {
    border-color: rgba(34, 36, 38, 0.35);
    box-shadow: none;
  }
  &:focus {
    border-color: #96c8da;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  }

  ${ifProp(
    { hasIcon: true },
    css`
      padding-left: 41px;
    `,
  )}

  ${ifProp(
    { isOpen: true },
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `,
  )}
`;

export const Menu = styled.div`
  position: absolute;
  width: ${prop('width', DEFAULT_WIDTH)}px;
  max-height: 20rem;
  overflow-y: auto;
  overflow-x: hidden;
  outline: 0;
  border-radius: 0 0 0.28571429rem 0.28571429rem;
  transition: opacity 0.1s ease;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  border-color: #f9fafb;
  border: 1px solid #f9fafb;
  border-top-width: 0;
  background-color: #f9fafb;
  z-index: 2;
`;

export const SelectBoxContainer = styled.div`
  width: ${prop('width', DEFAULT_WIDTH)}px;
  height: ${prop('height', DEFAULT_HEIGHT)}px;
  position: relative;
  ${ifProp(
    'margin',
    css`
      margin: ${prop('margin', 0)};
    `,
  )}

  ${Menu} {
    top: ${prop('height', DEFAULT_HEIGHT)}px;
  }
`;

export const ControllerButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;

export const ArrowIcon = ({ isOpen }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={16}
      fill="transparent"
      stroke="#979797"
      strokeWidth="1.1px"
      transform={isOpen ? 'rotate(180)' : null}
    >
      <path d="M1,6 L10,15 L19,6" />
    </svg>
  );
};

export const XIcon = () => {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={12}
      fill="transparent"
      stroke="#979797"
      strokeWidth="1.1px"
    >
      <path d="M1,1 L19,19" />
      <path d="M19,1 L1,19" />
    </svg>
  );
};
