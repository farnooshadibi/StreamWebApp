import React , {Component} from 'react'
import validator from 'validator';
import axios from 'axios';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar,Input, InputGroup } from 'rsuite';

export default class AdminLogin extends Component{

    constructor(props){
        super(props);
        if(this.props.auth){
            this.props.history.push('/')
        }
        this.state ={
            fields :{
                email :'',
                password :''
            },
            errors:{}
        }
    }
    handleChange(value) {
        this.setState({
            fields: value
        });
        console.log("fields:", this.state.fields);
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
            errors["password"] = "فیلد پسورد نباید خالی باشد";
        }
        this.setState({errors} ,() =>{
            return callback(formIsValid) ;
        }); 
    }
    handleRequest(){
        const{ email , password} = this.state.fields;
        axios.post('http://192.168.110.52:5000/api/admin/LoginPost' , { email , password})
        .then( response => 
            { return (console.log(response),
            localStorage.setItem('api-token' , response.data.data),
            //this.props.login(),
            //this.setState({loading:false}),
            this.props.history.push('/user')
        )}
        )
        .catch( (error) => console.log(error))
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
        <div class="align-self-center">
        <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}  style={{ marginTop:30}} onChange={this.handleChange.bind(this)}>
            <FormGroup>
            <ControlLabel>نام کاربری</ControlLabel>
            <FormControl
            style={{right:"50%"}}            
            // onChange={this.handleChange.bind(this)}
            placeholder="لطفا ایمیل خود را وارد نمایید"
            name="email"
            />
            </FormGroup>
            <FormGroup>
            <ControlLabel>رمز عبور</ControlLabel>
            <FormControl
            name="password" 
            type="password"
            className={["form-control" , errors["password"] ? 'is-invalid':'' ].join(' ')}
            // onChange={this.handleChange.bind(this)} 
            />
            <span className="invalid-feedback rtl" style={{display :errors["password"] ? 'block':'none'}}>{errors["password"]} </span>
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