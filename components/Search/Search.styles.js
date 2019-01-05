import { styled } from '@styles';

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
  background: #fff;
  box-shadow: 0 5px 50px rgba(0, 0, 0, 0.025);
`;

export const FormWrapper = styled.div`
  height: 78px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

export const SearchForm = styled.div`
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  font-size: 1.75rem;
  font-weight: 300;
  height: 78px;
  padding: 0 1rem 0 1.5rem;

  width: 100%;
  display: block;
  appearance: none;
  border: 0;
  outline: 0;
  box-shadow: none;
  background: transparent;
  margin: 0;
  color: #6c7987;
  border-radius: 3px;
  transition: box-shadow 0.2s ease;
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

export const SearchResults = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  overflow: auto;
  padding-top: 2rem;
`;
