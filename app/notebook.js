import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyComponent from '../components/MyComponent';

// import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('app'));

const App = () => (
  <MuiThemeProvider>
    <MyComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);