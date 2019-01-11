import { styled, ifProp, prop, css, Grid, Row, Col, media } from '@styles';

export const ShelterDetailsWrapper = styled(Grid)`
  height: 100%;
  margin-top: 100px;
`;

export const ContentWrapper = styled(Row)`
  height: 'auto';
`;

export const MainContent = styled(Col)`
  height: auto;
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

export const Title = styled.h3`
  font-size: 27px;
  min-height: 40px;
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
