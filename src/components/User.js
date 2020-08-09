import React ,{Component} from 'react'
import axios from 'axios'
import validator from 'validator';
//import Cookies from 'universal-cookie'
import {Redirect} from 'react-router-dom'
import CustomizedSnackbars from './CustomizedSnackbars'
import FileInputComponent from 'react-file-input-previews-base64'
const apiPost='http://192.168.110.52:5000/api/customer';


export default class User extends Component{
    constructor(props){
        super(props);
        this.state={
            fields: {

                name: '',
                url: '',
                image: '',
                base64Image: ''

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
        //
        let files = event.target.files;
        console.log("file", event.target.files)
        let fields = this.state.fields;
       // let reader = new FileReader();
        let target = event.target;
        fields[target.name] = target.value;
        this.setState({ fields })
     //   reader.readAsDataURL(files[0]);

     //   reader.onload = (e) => {
            
            // this.setState({
            //     fields:{image: e.target.result},
            //   })
        //}
        //
        
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
        if (validator.isEmpty(fields.name)) {
            formIsValid = false;
            errors["name"] = "نام نمیتواند خالی باشد";
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
    // convertImageTo64( img){
    //     const {name,image} = this.state.fields;
    //     const imageToBase64 = require('image-to-base64');
    //     imageToBase64("https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg") // Path to the image
    // .then(
    //     (response) => {
    //         console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
    //     }
    // )
    // .catch(
    //     (error) => {
    //         console.log(error); // Logs an error if there was one
    //     }
    // )

    // }

    // getEmergencyFoundImg = urlImg => {
    //     var img = new Image();
    //     img.src = urlImg;
    //     img.crossOrigin = 'Anonymous';
      
    //     var canvas = document.createElement('canvas'),
    //       ctx = canvas.getContext('2d');
      
    //     canvas.height = img.naturalHeight;
    //     canvas.width = img.naturalWidth;
    //     ctx.drawImage(img, 0, 0);
      
    //     var b64 = canvas.toDataURL('image/png').replace(/^data:image.+;base64,/, '');
    //     return b64;
    //   }

    handleRequest() {
            const {name,image} = this.state.fields;
            //var i = this.convertImageTo64(image);
            //var i  = this.getEmergencyFoundImg(image);
            //console.log("im", i);
            //console.log(User)
            axios.post(apiPost, {name,image})
                .then(response => { 
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
        const { name, image,base64Image} = this.state.fields;
        const { errors } = this.state;
        return(
            <div className="form-group rtl">
                <h3 style={{ color:'green' }}>اطلاعات مشتری </h3>                
                <form  className="col-lg-5" onSubmit={this.handleSubmit.bind(this)}  style={{ marginTop: 30 }}>
                    <div className="form-group rtl">
                        <label> نام: </label>
                        <input type="text"
                            className={["form-control rtl", errors["name"] ? 'is-invalid' : ''].join(' ')}
                            name="name"
                            value={name}
                            onChange={this.handleChange.bind(this)}
                            placeholder="لطفا نام خود را وارد نمائید"
                        />
                                   <span className="invalid-feedback rtl" style={{ display: errors["name"] ? 'block' : 'none' }}>{errors["name"]} </span>
                    </div>
                    <div className="form-group rtl">
                        <label> عکس: </label>
                        <input type="file"
                            className="form-control"
                            name="image"
                            value={image}
                            onChange={this.handleChange.bind(this)}
                            placeholder="عکس ..."
                        />
                    </div>

                    {/* <FileInputComponent
                    labelText="Select file"
                    labelStyle={{fontSize:14}}
                    multiple={false}
                    value={image}
                    callbackFunction={(file_arr)=>{this.setState({ image: file_arr.base64 }) ; console.log(this.state.fields.image)}}
                    accept="image/*" 
                    /> */}


                    <div className="form-group rtl">
                        <label> base64 </label>
                        <input type="text"
                            className="form-control"
                            name="image"
                            value={image}
                            onChange={this.handleChange.bind(this)}
                            placeholder="عکس ..."
                        />
                    </div>

                    <div className="form-group">
                    <button type="submit" className="btn btn-success" >ثبت </button>
                    </div>
                </form>
                <button className="btn"  onClick={this.backToList.bind(this)} style={{color:'green'}}> بازگشت به لیست</button>
                <CustomizedSnackbars action={this.state.mode} message={this.state.message} open={this.state.isSuccess} handleClose={this.handleCloseCustomizadSnack.bind(this)}/>


            </div>
        )
    }
}
