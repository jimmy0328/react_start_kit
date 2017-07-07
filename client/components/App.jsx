import React from 'react';
import {RaisedButton} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <RaisedButton label="Hello World" />
      </div>);
  }
}
