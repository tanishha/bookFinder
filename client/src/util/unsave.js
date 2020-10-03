import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
export default class Unsave extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      setOpen: false,
      isDeleting: true,
    };
  }
  handleClickOpen = (e) => {
    this.setState({
      setOpen: true,
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      setOpen: false,
      open: false,
    });
  };
  handleDelete = () => {
    this.props.submitCallback(this.state.isDeleting);
    this.setState({
      setOpen: false,
      open: false,
    });
  };
  render() {
    return (
      <>
        <i className="fas fa-trash" onClick={this.handleClickOpen}></i>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Disagree
            </Button>
            <Button onClick={this.handleDelete} color="primary" >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
