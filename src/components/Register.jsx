import React , {Component} from 'react'
import validator from 'validator';
import axios from 'axios';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default-rtl.css'; //or ~rsuite/dist/styles/rsuite-dark.rtl.css
const apiPost='https://localhost:44397/api/person/AddPost';

export default class Register extends Component{

    constructor(props){
        super(props);
        if(this.props.auth){
            this.props.history.push('/')
        }
        this.state ={
            fields :{
                email :'',
                password :'',
                confirmPassword:''

            },
            errors:{}
        }
    }

    handleChange(value){ 
        this.setState({fields : value})
        console.log("fiels:" , this.state.fields);
    }

    handleValidation(callback){
        let{ fields} = this.state;
        let errors ={};
        let formIsValid = true;

        //Email
        if(validator.isEmpty(fields.email)){
            formIsValid = false;
            errors["email"] = "فیلد ایمیل نباید خالی باشد";
        } else if( ! validator.isEmail(fields.email)){
            formIsValid = false;
            errors["email"] = "فرمت ایمیل اشتباه است";
        }
          //Password
          if(validator.isEmpty(fields.password)){
            formIsValid = false;
            errors["password"] = "فیلد رمز عبور نباید خالی باشد";
        } else if(! validator.isLength(fields.password, {min:6 , max:undefined})){
            formIsValid = false;
            errors["password"] = "رمز عبور حداقل 6 رقم باید باشد";
        }
         //confirmPassword
         if(validator.isEmpty(fields.confirmPassword)){
            formIsValid = false;
            errors["confirmPassword"] = "فیلد رمز عبور نباید خالی باشد";
        } else if(fields.password !== fields.confirmPassword){
            formIsValid = false;
            errors["confirmPassword"] = "با رمز عبور وارد شده مطابقت ندارد";
        }
       // console.log(errors);
        this.setState({errors} ,() =>{
            return callback(formIsValid) ;
        }); 
    }
    handleRequest(item) {
        console.log('handleRequest:',item);
            const {  email, password,confirmPassword } = this.state.fields;
            axios.post(apiPost, { email, password,confirmPassword})
                .then(response => {
                     //console.log("response:", response);                     
                        alert(response.data.message);
                        this.setState({loading:false})
                        //this.getPerson()
                        // this.props.history.push('/Register')                   
                }
                )   
                .catch((error) => console.log(error))
    
    }

    handleSubmit(event){
        event.preventDefault();
        this.handleValidation( (valid) =>{
            if(valid){
               this.handleRequest()
            }
        })
    }

    render(){
        const{ email , password} = this.state.fields;
        const{errors} = this.state;
        return(
            <div style={{marginBottom:100,
                marginLeft:200,
                marginRight:250 ,
                borderRadius: '10px',
                borderBottom: '1px solid green',
               textAlign:"center",
               maxWidth: '50em',
               padding: '1.5em 2em 2em',
               border: '3px solid #3CC740',
               background: '#E6EEFA', }}>
            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}  style={{ marginTop:30}} onChange={this.handleChange.bind(this)}>
    <FormGroup>
      <ControlLabel>نام کاربری</ControlLabel>
      <FormControl
      placeholder="لطفا ایمیل خود را وارد نمایید"
      className={["form-control" , errors["email"] ? 'is-invalid':'' ].join(' ')}
      name="email" />
      <span className="invalid-feedback rtl" style={{display :errors["email"] ? 'block':'none'}}>{errors["email"]} </span>     
    </FormGroup>
    <FormGroup>
      <ControlLabel>رمز عبور</ControlLabel>
      <FormControl
      name="password" 
      type="password"
      className={["form-control" , errors["password"] ? 'is-invalid':'' ].join(' ')} />
      <span className="invalid-feedback rtl" style={{display :errors["password"] ? 'block':'none'}}>{errors["password"]} </span>
    </FormGroup>
    <FormGroup>
      <ControlLabel>تکرار رمز عبور</ControlLabel>
      <FormControl
      name="confirmPassword" 
      type="password"
      className={["form-control" , errors["confirmPassword"] ? 'is-invalid':'' ].join(' ')} />
      <span className="invalid-feedback rtl" style={{display :errors["confirmPassword"] ? 'block':'none'}}>{errors["confirmPassword"]} </span>
    </FormGroup>
    <FormGroup>
      <ButtonToolbar>
        <Button color='green' appearance="primary" type="submit" style={{width:150}}>ورود</Button>
      </ButtonToolbar>
    </FormGroup>
  </Form>                 
            </div>
        )
    }
}