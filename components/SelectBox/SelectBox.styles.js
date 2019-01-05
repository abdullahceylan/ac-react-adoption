import { styled, ifProp, prop, css } from '@styles';

export const SelectBoxContainer = styled.div`
  width: ${prop('width', 250)}px;
  height: ${prop('height', 32)}px;
`;

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
  line-height: 0.8em;
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
  width: ${prop('width', 200)}px; /* full width - icon width/2 - border*/
  font-size: 14px;
  word-wrap: break-word;
  line-height: 1em;
  outline: 0;
  white-space: normal;
  min-height: 2em;
  height: ${prop('height', 32)}px;
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
  max-height: 20rem;
  overflow-y: auto;
  overflow-x: hidden;
  border-top-width: 0;
  outline: 0;
  border-radius: 0 0 0.28571429rem 0.28571429rem;
  transition: opacity 0.1s ease;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  border-color: #96c8da;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
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
