import { styled, Grid, Row } from '@styles';

export const SearchResultsWrapper = styled(Grid)`
  height: calc(100vh - 60px);
  overflow: auto;
  padding-top: 2rem;
`;

export const SearchListWrapper = styled(Row)`
  margin: 0 5px;
`;

export const GeneralWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  min-height: 500px;
  flex-direction: column;
`;

export const LoadingImage = styled.img``;

export const InformText = styled.p`
  font-size: 30px;
  font-weight: 300;
`;
