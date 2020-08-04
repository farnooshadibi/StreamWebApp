import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AlertDialogClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClickOpen() {
    this.setState({ open: true })
  }
  handleClose() {
    this.setState({ open: false })
  }

render(){
  //const { message, dialogTitle } = this.props
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen.bind(this)}>
       دیالوگ آلرت از نوع کلاس کامپوننت
      </Button>
      <Dialog
      className ="rtl"
        open={this.state.open}
        onClose={this.handleClose.bind(this)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{this.props.dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {this.props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose.bind(this) && this.props.handleClose.bind(this)} color="primary">
            تایید
          </Button>
          <Button onClick={this.handleClose.bind(this)} color="primary" autoFocus>
            لغو
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}