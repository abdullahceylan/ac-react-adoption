import { styled } from '@styles';

export const Header = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: absolute;
  width: 100%;
  z-index: 3;
`;

export const Title = styled.div``;

export const SearchIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
