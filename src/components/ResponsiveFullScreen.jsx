import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default class ResponsiveDialog extends Component{

    constructor(props) {
        super(props);
        //const theme = useTheme();
        //const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
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
        const { message , dialogTitle } = this.props
        return (
            <div>
              <Button variant="outlined" color="primary" onClick={this.handleClickOpen.bind(this)}>
               دیالوگ از نوع کلاس
              </Button>
              <Dialog
              className="rtl"
                //fullScreen={this.state.fullScreen}
                open={this.state.open}
                onClose={this.handleClose.bind(this)}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">{dialogTitle}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                   {message}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={this.handleClose.bind(this) && this.props.handleClose} color="primary">
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