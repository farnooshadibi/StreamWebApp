// import React, { Component } from 'react';
// import { Alert, Button, ButtonToolbar   } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default-rtl.css';

// export default class RsuitAlert extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         open: false
//       }
//     }
  
//     // componentWillReceiveProps(props) {
//     //     if(props.open!==this.state.open){
//     //         this.setState({open:props.open});
//     //     }
//     // }
//     // handleClick() {
//     //   this.setState({ open: true })
//     // }
//     // handleClose() {
//     //   this.setState({ open: false })
//     // }
//     render() {
//       const { message, action } = this.props
//       return (
//         <div>
//             <ButtonToolbar>
//     <Button style={{textAlign:'center'}} onClick={() => Alert.info('ثبت با موفقیت انجام شد', 50000000)}> Info </Button>
//     <Button onClick={() => Alert.success('This is a successful message.', 5000)}> Success </Button>
//     <Button onClick={() => Alert.warning('This is a warning notice.', 5000)}> Warning </Button>
//     <Button onClick={() => Alert.error('This is an error message.', 5000)}> Error </Button>
//   </ButtonToolbar>
//           {/* {action === 'add' || action === 'submit' ?
//           <Snackbar
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'right',
//             }}
//             className="rtl"
//             open={this.state.open}
//             autoHideDuration={1000}
//             onClose={this.handleClose.bind(this) && this.props.handleClose}
//           >
//               <MySnackbarContentWrapper
//                className="rtl"
//                 onClose={this.handleClose.bind(this)  && this.props.handleClose}
//                 variant="success"
//                 message={message}
//               />
//                 </Snackbar>
//               : (
//                 null
//               )}       
//             {action === 'edit' ?
//               <Snackbar
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'right',
//               }}
//               open={this.state.open}
//               autoHideDuration={2000}
//               onClose={this.handleClose.bind(this) && this.props.handleClose}
//             >
//           <MySnackbarContentWrapper
//           onClose={this.handleClose.bind(this) && this.props.handleClose}
//           variant="info"
//           message={message}      
//           />
//            </Snackbar>
//            :(
//             null
//           )}
//           {action === "error" ?
//               <Snackbar
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'right',
//               }}
//               open={this.state.open}
//               autoHideDuration={2000}
//               onClose={this.handleClose.bind(this) && this.props.handleClose}
//             >
//           <MySnackbarContentWrapper
//           onClose={this.handleClose.bind(this) && this.props.handleClose}
//           variant="error"
//           message={message}      
//           />
//            </Snackbar>
  
//            :(
//             null
//           )}            
//           {action === "delete" ?
//             <Snackbar
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'right',
//               }}
//               open={this.state.open}
//               autoHideDuration={5000}
//               onClose={this.handleClose.bind(this) }
//             >
//           <MySnackbarContentWrapper
//           onClose={this.handleClose.bind(this) }
//           variant="warning"
//           message={message} 
//           action={[
//             <Button key="ok" color="secondary" size="small" onClick={this.props.handleRequest}>
//               بله
//           </Button> ,
//           <Button key="close" color="secondary" size="small" onClick={this.handleClose.bind(this)}>
//           خیر
//       </Button>
//           ]}     
//           />
//            </Snackbar>
//            :(
//             null
//           )}         */}
//         </div>   
//       );
//     }
//   }
  
//   // CustomizedSnackbars.propTypes = {
//   //   action: PropTypes.string.isRequired,
//   //   message: PropTypes.string.isRequired,
//   //   open: PropTypes.bool.isRequired,
//   //   handleClose:PropTypes.func.isRequired,
//   //   handleRequest: PropTypes.func, 
//   //};

//   //https://dotnetdetail.net/how-to-add-authentication-to-react-app-using-asp-net-core-3-in-vs2019/