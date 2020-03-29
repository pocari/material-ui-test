import React from 'react';
import { Button, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { theme } from 'theme';
import Layout from 'components/global/layout';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Button variant="contained" color="primary">hello, world! </Button>
      </Layout>
    </MuiThemeProvider>
  );
}

export default App;
