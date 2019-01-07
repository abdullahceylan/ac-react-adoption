import { styled, Grid, Row } from '@styles';

export const SearchResultsWrapper = styled(Grid)`
  height: calc(100vh - 60px);
  overflow: auto;
  padding-top: 2rem;
`;

export const SearchList = styled(Row)`
  margin: 0 5px;
`;
