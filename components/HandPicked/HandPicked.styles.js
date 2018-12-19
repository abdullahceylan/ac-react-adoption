import { styled } from '@styles';

export const HandPickedWrapper = styled.div`
  display: flex;
  height: 450px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const HandPickedList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PetCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 223px;
  height: 200px;
  padding: 0;
  border-radius: 2px;
  margin: 0.95em 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  word-wrap: break-word;
  transition: all 0.2s ease-in-out;
  text-align: center;
  padding-bottom: 10px;

  &:hover {
    box-shadow: 0 25px 55px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
export const PetImage = styled.span`
  height: 150px;
  overflow: hidden;

  & > img {
    width: 100%;
  }
`;
export const PetName = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
