import {
  styled,
  css,
  ifProp,
  prop,
  media,
  FadeIn,
  FadeOut,
  Row,
} from '@styles';

export const SearchWrapper = styled.div`
  display: none;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  z-index: 999;
  background: #f9fafb;
  height: 100vh;
  padding: 28px 32px;
  overflow: hidden;
  will-change: transform;
  opacity: 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
  animation: ${FadeOut} 0.3s;

  ${ifProp(
    { isSearchActive: true },
    css`
      display: flex;
      opacity: 1;
      animation: ${FadeIn} 0.3s;
    `,
  )}

  ${media.sm(`
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    box-shadow:0 0 0
  `)}
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
  padding: 0;
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
  margin: 0 5px;
`;

export const SearchIcon = styled.span`
  & > svg {
    width: 25px;
    fill: #ccc;
  }
`;

export const CloseIcon = styled.span`
  cursor: pointer;
  & > svg {
    width: 16px;
  }
`;

export const SearchInfoText = styled.p`
  font-size: 21px;
  line-height: 2rem;
`;
