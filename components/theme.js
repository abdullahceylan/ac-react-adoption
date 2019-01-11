// May be we can use emotion later.
// So, with this, we don't need to change into all of the components.
// Just change 'styled-components' to 'emotion-theming'
import { ThemeProvider } from 'styled-components';

export { ThemeProvider };

// Rest of the theme
const theme = {
  grid: {
    size: 12,
    gutter: 10, // 10px
    outerMargin: 1,
    breakpoints: {
      xs: 0, // px
      sm: 768, // px
      md: 960, // px
      lg: 1200, // px
    },
  },
};

export default theme;
