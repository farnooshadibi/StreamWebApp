import React ,{Component} from 'react'
import axios from 'axios'
import validator from 'validator';
//import Cookies from 'universal-cookie'
import {Redirect} from 'react-router-dom'
import CustomizedSnackbars from './CustomizedSnackbars'
import RsuitAlert from './RsuitAlert';
import { Alert  } from 'rsuite';
import LineCharts from './Charts/LineCharts'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar,Input, InputGroup } from 'rsuite';
const apiPost='http://192.168.110.52:5000/api/user';


export default class User extends Component{
    constructor(props){
        super(props);
        this.state={
            fields: {

                firstName: '',
                lastName: '',
                mobile: '',

            },
            errors: {},
            Id:0,
            mode:'',
            isSuccess:false,
            message:''
        }
    }
    componentDidMount(){
        //with Passing props
        const {mode} = this.props.location.state
        if(mode === 'edit')
        {
            this.state.mode='edit'
            const {userId} = this.props.location.state
            this.state.Id = userId
            this.handleEdit(userId);
        }
        else if( mode ==='add'){
            this.state.mode='add'
        }        
        //with url
        //const {id} = this.props.match.params
        //console.log("id:", id) // "foo"
        //with cookie
        //const cookies = new Cookies();
        //console.log("cookie",cookies.get('userId'))
    }
    handleEdit(userId) {              
        axios.get(`http://192.168.110.52:5000/api/user/${userId}`)
        .then(
            response => {
                this.setState(prevState => ({
                    fields: {
                        ...prevState.fields,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        mobile: response.data.mobile
                    },
                })
                )
            }
        )
        .catch((error) =>{
            console.log(error)
            this.setState({ isSuccess:true , mode:'error',message:'ثبت با خطا مواجه شد'})
        } )  
     }
    handleChange(event) {
        let fields = this.state.fields;
        let target = event.target;
        console.log("hhhhh",event.target )
        fields[target.name] = target.value;
        this.setState({ fields })
    }
    handleChange1(event){
        console.log("hhhhh",event );
        let fields = this.state.fields;
        fields[event] = event;
    }
    handleValidation(callback) {
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;

        //Name
        if (validator.isEmpty(fields.firstName)) {
            formIsValid = false;
            errors["name"] = "نام نمیتواند خالی باشد";
        }
        //Family
        if (validator.isEmpty(fields.lastName)) {
            formIsValid = false;
            errors["family"] = "نام خانوادگی نمیتواند خالی باشد";
        }
          //Mobile
        if(!validator.isNumeric(fields.mobile)){
            formIsValid = false;
            errors["mobile"] = "شماره همراه خود را وارد کنید"
        }
        else if (!validator.isLength(fields.mobile, { min: 11, max: 11 })) {
        formIsValid = false;
        errors["mobile"] = "فرمت اشتباه است";
         }
        this.setState({ errors }, () => {
            return callback(formIsValid);
        });
    }
    handleSubmit(event){
        event.preventDefault();
        const mode = this.state.mode
        this.handleValidation((valid) => {
            if (valid) {
                if(mode ==='add'){
                    this.handleRequest();
                    //this.props.history.push('/user')
                }
                else if(mode === 'edit'){
                    this.handleSubmitEdit();
                }
            }           
        })
    }
    handleRequest() {
            const {firstName,lastName,mobile} = this.state.fields;
            //console.log(User)
            axios.post(apiPost, {firstName,lastName,mobile})
                .then(response => { 
                    Alert.info('ثبت با موفقیت انجام شد', 50000000)
                    this.setState({isSuccess:true} );
                    this.setState({message:"ثبت کاربر با موفقیت انجام شد"})              
                       // alert(response.data.message);               
                })   
                .catch((error) => {
                    console.log(error)
                    this.setState({ isSuccess:true , mode:'error',message:'Error has occurred'})
                }
            )
    }
    handleSubmitEdit() {        
        const {firstName,lastName, mobile} = this.state.fields;
        axios.put(`http://192.168.110.52:5000/api/user/${this.state.Id}`, { firstName, lastName, mobile })
            .then(response => { 
             //alert(response.data.message);

             this.setState({ isSuccess : true});
             this.setState({message:"ویرایش اطلاعات با موفقیت انجام شد"})
             
            })
            // .then(this.props.history.push('/user'))
            .catch(error => {
               console.log(error);
                this.setState({ isSuccess:true , mode:'error',message:'ثبت با خطا مواجه شد'})
                
            })
    }
    backToList(){
        console.log("gggg", this.props.history)
        return this.props.history.push('/user')
        // return <Redirect to="/user" />
    }
    handleCloseCustomizadSnack(){
        this.setState({ isSuccess : false})
    }
    render(){
        const { firstName, lastName,mobile} = this.state.fields;
        const { errors } = this.state;
        return(
            <div className="form-group rtl">
                <h2 style={{ color:'green' }}> پروفایل کاربر </h2>                
                <form  className="col-lg-5" onSubmit={this.handleSubmit.bind(this)}  style={{ marginTop: 30 }}>
                    <div className="form-group rtl">
                        <label> نام: </label>
                        <input type="text"
                            className={["form-control rtl", errors["name"] ? 'is-invalid' : ''].join(' ')}
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChange.bind(this)}
                            placeholder="لطفا نام خود را وارد نمائید"
                        />
                        <span className="invalid-feedback rtl" style={{ display: errors["name"] ? 'block' : 'none' }}>{errors["name"]} </span>
                        {/* <Input type="text" className={["form-control rtl", errors["name"] ? 'is-invalid' : ''].join(' ')}
                            name="firstName"
                            onChange={this.handleChange1.bind(this)}
                            placeholder="لطفا نام خود را وارد نمائید" /> */}
                    </div>
                    <div className="form-group rtl">
                        <label> نام خانوادگی: </label>
                        <input type="text"
                            className={["form-control", errors["family"] ? 'is-invalid' : ''].join(' ')}
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChange.bind(this)}
                            placeholder="لطفا نام خانوادگی خود را وارد نمائید"
                        />
                        <span className="invalid-feedback rtl" style={{ display: errors["family"] ? 'block' : 'none' }}>{errors["family"]} </span>
                    </div>
                    <div className="form-group rtl">
                        <label> شماره موبایل: </label>
                        <input type="text"
                            className={["form-control", errors["mobile"] ? 'is-invalid' : ''].join(' ')}
                            name="mobile"
                            value={mobile}
                            onChange={this.handleChange.bind(this)}
                            placeholder="09...."
                        />
                        <span className="invalid-feedback rtl" style={{ display: errors["mobile"] ? 'block' : 'none' }}>{errors["mobile"]} </span>
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-success" >ثبت </button>
                    </div>
                </form>
                <button className="btn"  onClick={this.backToList.bind(this)} style={{color:'green'}}> بازگشت به لیست</button>
                <CustomizedSnackbars action={this.state.mode} message={this.state.message} open={this.state.isSuccess} handleClose={this.handleCloseCustomizadSnack.bind(this)}/>
                <RsuitAlert />
                 <LineCharts />

            </div>
        )
    }
}
