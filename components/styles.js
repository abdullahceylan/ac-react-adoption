// May be we can use emotion later.
// So, with this, we don't need to change all of the components styles.
// Just change 'styled-components' to '@emotion/styled'
import styled from 'styled-components';

export { styled };

// Rest of styles
export const globalStyles = `
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  width: 100vw;
  height: 100vh;
  font-family: 'Quicksand', Georgia, "Times New Roman", sans-serif;
  margin: 0;
  overflow-x: hidden;
  font-weight: 400;
}

body > div {
  height: 100%;
  width: 100%;
}

strong, b, h2, h1, h3, h4, h5, h6 {
  font-weight: 600;
}
`;

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
