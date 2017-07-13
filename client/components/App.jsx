import React from 'react';
import {RaisedButton} from 'material-ui';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <RaisedButton label={this.props.name} />
      </div>);
  }
}
