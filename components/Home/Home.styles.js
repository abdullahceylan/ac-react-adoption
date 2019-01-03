import { styled } from '@styles';
const dogRight = '/static/images/dog.png';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const LeftSide = styled.div`
  width: 50%;
  background-color: #f8f7f2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftHeader = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Title = styled.div``;

export const SearchWrapper = styled.div``;

export const LeftContent = styled.div`
  height: 100%;
  padding: 20px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentTitle = styled.h1``;
export const ContentSlogan = styled.p``;

export const LeftFooter = styled.div`
  height: 100px;
  background-color: #f8f1e7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 20px;

  & > p {
    margin: 0;
    font-size: 18px;
    line-height: 2rem;
    font-weight: 700;
  }

  & > small {
    font-size: 12px;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  background-color: #fce2b8;
  /* background-image: url(${dogRight});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat; */
`;
