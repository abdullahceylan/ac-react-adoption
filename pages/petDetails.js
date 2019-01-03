import React, { Component } from 'react';
import theme, { ThemeProvider } from '@theme';
import MainLayout from '../layouts';
import PetDetails from '@components/PetDetails';

class Details extends Component {
  static async getInitialProps({ query }) {
    return { pageParams: query };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <PetDetails pageParams={this.props.pageParams} />
        </MainLayout>
      </ThemeProvider>
    );
  }
}

export default Details;
