import { styled, Grid } from '@styles';

export const ErrorWrapper = styled(Grid)`
  width: 100vw;
  height: 100vh;
  position: relative;
  padding-top: 100px;
`;

export const ErrorFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 330px;
  background-image: url(/static/images/city.png);
  background-size: contain;
  text-align: center;

  & > img {
    height: 330px;
  }
`;

export const StatusCode = styled.h1`
  color: #ccc;
  text-align: center;
  font-size: 137px;
  font-weight: bold;
  letter-spacing: 3.6px;
  line-height: 160px;
  margin: 0 0 7px;
`;

export const ErrorHeader = styled.h3`
  color: #ccc;
  text-align: center;
  font-size: 28px;
  line-height: 42px;
  font-weight: 600;
  margin-bottom: 21px;
`;

export const ErrorBody = styled.p`
  color: #ccc;
  text-align: center;
  font-size: 27px;
  line-height: 24px;
`;
