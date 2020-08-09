// import React , {Component} from 'react'
// import validator from 'validator';
// import axios from 'axios';
// import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar,Input, InputGroup } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default-rtl.css'; //or ~rsuite/dist/styles/rsuite-dark.rtl.css

// export default class Login extends Component{

//     constructor(props){
//         super(props);
//         if(this.props.auth){
//             this.props.history.push('/')
//         }
//         this.state ={
//             fields :{
//                 email :'',
//                 password :''
//             },
//             errors:{}
//         }
//     }
//     handleChange(value) {
//         this.setState({
//             fields: value
//         });
//         console.log("fields:", this.state.fields);
//       }
//     handleValidation(callback){
//         let{ fields} = this.state;
//         let errors ={};
//         let formIsValid = true;

//         //Email
//         if(validator.isEmpty(fields.email)){
//             formIsValid = false;
//             errors["email"] = "فیلد ایمیل نباید خالی باشد";
//         } else if( ! validator.isEmail(fields.email)){
//             formIsValid = false;
//             errors["email"] = "فرمت ایمیل اشتباه است";
//         }
//           //Password
//           if(validator.isEmpty(fields.password)){
//             formIsValid = false;
//             errors["password"] = "فیلد پسورد نباید خالی باشد";
//         } 
//         this.setState({errors} ,() =>{
//             return callback(formIsValid) ;
//         }); 
//     }
//     handleRequest(){
//         const{ email , password} = this.state.fields;
//         axios.post('https://localhost:44397/api/person/LoginPost' , {email, password})
//         .then( response => 
//             { return (console.log(response),
//             localStorage.setItem('api-token' , response.data.data),
//             this.props.login(),
//             //this.setState({loading:false}),
//             this.props.history.push('/user')
//         )}
//         )
//         .catch( (error) => console.log(error))
//     }
//     handleSubmit(event){
//         event.preventDefault();
//         this.handleValidation( (valid) =>{
//             if(valid){
//                this.handleRequest()
//             }
//         })
//     }
//     render(){
//         const{ email , password} = this.state.fields;
//         const{errors} = this.state;
//         return(
//             <div style={{marginBottom:100,
//                  marginLeft:200,
//                  marginRight:250 ,
//                  borderRadius: '10px',
//                  borderBottom: '1px solid green',
//                 textAlign:"center",
//                 maxWidth: '50em',
//                 padding: '1.5em 2em 2em',
//                 border: '3px solid #3CC740',
//                 background: '#E6EEFA', }}>
//             <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}  style={{ marginTop:30}} onChange={this.handleChange.bind(this)}>
//     <FormGroup>
//       <ControlLabel>نام کاربری</ControlLabel>
//       <FormControl
//      // onChange={this.handleChange.bind(this)}
//       placeholder="لطفا ایمیل خود را وارد نمایید"
//       className={["form-control" , errors["email"] ? 'is-invalid':'' ].join(' ')}
//       name="email"
//       />
//       <span className="invalid-feedback rtl" style={{display :errors["email"] ? 'block':'none'}}>{errors["email"]} </span>     
//     </FormGroup>
//     <FormGroup>
//       <ControlLabel>رمز عبور</ControlLabel>
//       <FormControl
//       name="password" 
//       type="password"
//       className={["form-control" , errors["password"] ? 'is-invalid':'' ].join(' ')}
//      // onChange={this.handleChange.bind(this)} 
//      />
//       <span className="invalid-feedback rtl" style={{display :errors["password"] ? 'block':'none'}}>{errors["password"]} </span>
//     </FormGroup>
//     <FormGroup>
//       <ButtonToolbar>
//         <Button color='green' appearance="primary" type="submit" style={{width:150}}>ورود</Button>
//       </ButtonToolbar>
//     </FormGroup>
//   </Form>                 
//             </div>
//         )
//     }
// }