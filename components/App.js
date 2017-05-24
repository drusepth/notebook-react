import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyComponent from '../components/MyComponent';

const App = () => (
  <MuiThemeProvider>
    <MyComponent />
  </MuiThemeProvider>
);

export default App;