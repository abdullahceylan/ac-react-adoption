import { styled, prop, valueSelector } from '@styles';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0.25rem;
  left: 0.25rem;
  width: calc(100vw - 0.5rem);
  z-index: 2000;
  background: #f9fafb;
  height: calc(100vh - 0.5rem);
  transform: scale(1.1);
  padding: 55px 64px;
  overflow: hidden;
  will-change: transform;
  opacity: 1;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
`;

export const SearchHeader = styled.div`
  width: 100%;
  box-shadow: 0 5px 50px rgba(0, 0, 0, 0.025);
`;

export const FormWrapper = styled.div`
  height: 78px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
`;

export const SearchForm = styled.div`
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchInput = styled.input`
  display: block;
  width: ${prop('width', '100%')};
  height: 70px;
  font-size: 1.05rem;
  font-weight: 300;
  padding: 0 1rem 0 1.5rem;
  appearance: none;
  outline: 0;
  box-shadow: none;
  margin: 0;
  color: #6c7987;
  border-radius: 3px;
  transition: box-shadow 0.2s ease;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.3rem;
  margin: 0 10px;
`;

export const SearchIcon = styled.span`
  & > svg {
    width: 25px;
    fill: #ccc;
  }
`;

export const CloseIcon = styled.span`
  & > svg {
    width: 16px;
  }
`;
