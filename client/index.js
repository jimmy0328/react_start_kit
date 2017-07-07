import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App.jsx';

const RootApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);


ReactDOM.render(<RootApp />, document.getElementById('root'));
