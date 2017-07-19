import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class DialogExample extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
    }
  }

	handleOpen(){
		this.setState({open: true});
	}

	handleClose(){
		this.setState({open: false});
	}

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.handleClose.bind(this)}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				disabled={true}
				onTouchTap={this.handleClose.bind(this)}
			/>,
		];

		return (
			<div>
				<RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen.bind(this)} />
				<Dialog
					title="Dialog With Actions"
					actions={actions}
					modal={true}
					open={this.state.open}
				>
					Only actions can close this dialog.
				</Dialog>
			</div>
		);
	}
}
