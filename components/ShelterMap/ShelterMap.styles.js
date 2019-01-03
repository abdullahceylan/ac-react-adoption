import { styled } from '@styles';

export const ShelterMapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
`;

export const MapMarker = styled.div`
  background-color: #aaa;
  background-image: linear-gradient(
    left,
    hsla(0, 0%, 100%, 0.2),
    hsla(0, 0%, 0%, 0.2)
  );
  display: block;
  height: 1em;
  left: 50%;
  margin: -1em -0.05em;
  position: absolute;
  top: 50%;
  width: 0.15em;

  &:after {
    background-color: red;
    background-image: radial-gradient(
      circle,
      25% 25%,
      hsla(0, 0%, 100%, 0.2),
      hsla(0, 0%, 0%, 0.2)
    );
    border-radius: 50%;
    content: '';
    height: 1.1em;
    left: -0.45em;
    position: absolute;
    top: -0.65em;
    width: 1.1em;
  }
`;
