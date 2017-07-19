import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import DialogExample from './components/DialogExample';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const RootApp = () => (
  <MuiThemeProvider>
    <div>
      <App name={'This is button'}/>
      <DialogExample />
    </div>
  </MuiThemeProvider>
);


ReactDOM.render(<RootApp />, document.getElementById('root'));
