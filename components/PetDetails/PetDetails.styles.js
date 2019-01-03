import { styled, ifProp, prop, css, Grid, Row, Col, media } from '@styles';

export const NoPetAvailable = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoPetText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    height: 200px;

    ${media.smLess`
      height: 150px;
   `}
  }

  & > p {
    font-size: 52px;

    ${media.smLess`
      font-size: 32px;
   `}
  }
`;

export const PetDetailsWrapper = styled(Grid)`
  height: 100%;
`;
export const ContentWrapper = styled(Row)`
  height: 'auto';
`;
export const MainContent = styled(Col)`
  height: 100%;
  overflow: visible;
  padding: 23px 30px;
  margin-bottom: 82px;
  position: relative;
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px 3px rgba(77, 71, 81, 0.2);
  background-color: #fff;
`;

export const ContentSection = styled.div``;

export const Details = styled.div`
  & > p {
    line-height: 29px;
  }
`;

export const PetInfoBar = styled(Col)`
  display: flex;
  flex-direction: column;
`;

export const SidebarSection = styled.div`
  overflow: visible;
  padding: 19px 30px;
  margin-bottom: 82px;
  position: relative;
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px 3px rgba(77, 71, 81, 0.2);
  background-color: #fff;

  ${ifProp(
    { withIcon: true },
    css`
      padding-top: 85px;
    `,
  )}
`;

export const SectionIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 115px;
  height: 115px;
  border: 7px solid #fff;
  border-radius: 50%;
  position: absolute;
  top: -56px;
  left: calc(50% - 58.5px);
  background-color: #a3d256;

  & > svg {
    width: 60px;
    fill: #fff;
  }
`;

export const Title = styled.h3`
  font-size: 27px;
  height: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #8bc34a;
  display: block;
  color: ${prop('color', '#000')};

  ${ifProp(
    'noBorderBottom',
    css`
      border-bottom: 0;
    `,
  )}
  ${ifProp(
    'centered',
    css`
      text-align: center;
    `,
  )}
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  min-height: 39px;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 600;
`;

export const Value = styled.span`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: ${prop('fontSize', 16)}px;
  & > span {
    line-height: 23px;
  }
`;
