import React ,{Component} from 'react';
import axios from'axios';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CustomizedSnackbars ,{} from './CustomizedSnackbars';
import BootstrapTable from 'react-bootstrap-table-next'; 
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';  
import paginationFactory from 'react-bootstrap-table2-paginator';  
const getUrl='http://192.168.110.52:5000/api/customer';




export default class UserList extends Component{

    constructor(props){
        super(props);
        this.state={
            users:[],
            userId:0,
            showPopup: false,
            setOpen:false,
            open:false,
            setOpenSnack:false,
            openSnack:false,
            isSuccess:false,
            mode:'',
            message:'',
            columns: [{  
              dataField: 'id',  
              text: 'شماره'  
            },  
            {  
              dataField: 'name',  
              text: 'نام'}
              , {  
              dataField: 'url',  
              text: 'URL',  
              sort: true  
            },  
            {  
                    dataField: 'streamKey',  
                    text: 'کلید',  
                    sort: true  
                  }]                 
        }
    }    
    componentDidMount(e) {        
        this.getUserList(); 
    }
    togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
         }  
    getUserList(){
        axios.get(getUrl)
        .then(response =>{
          console.log("res", response);
            const {data} = response.data;
         this.setState({ users : data });
         console.log("users", this.state.users);
        })
        .catch( error => console.log(error))
    }
    // handleClickOpen(id) {
    //     this.setState({ mode:'delete'})
    //     //console.log("mode:",this.state.mode)
    //     this.setState({setOpen:true, open:true, userId:id})
    //     this.setState({message:"آیا مایل به حذف کاربر هستید؟"})     
    //     //this.handleDelete(id)
    //   }    
    // handleClose() {
    //     this.setState({setOpen:false, open:false})
    //   }   
    // handleDelete(id) {
    //     const {userId} = this.state;
    //     this.setState({mode:'submit'})
    //   // if (window.confirm("Do you want delete this User?")) {
    //         axios.delete(`http://192.168.110.52:5000/api/customer/${userId}`)
    //             .then(response => {
    //                 this.setState({ open:true , message:"کاربر مورد نظر باموفقیت حذف شد"});
    //                     this.getUserList();
    //             })               
    //             .catch((error) => {
    //                 console.log(error);
    //                 this.setState({ open:true , mode:'error',message:'حذف با خطا مواجه شد'})

    //             } )
    //             this.setState({open:false})
    //    // }
    // }

    //  handleClick() {
    //     this.setState({setOpenSnack:true})
    //     this.setState({openSnack:true})
    // } 
    //  handleCloseSnack(event, reason) {
    //   if (reason === 'clickaway') {
    //     return;
    //   }
    //   this.setState({setOpenSnack:false})
    //   this.setState({OpenSnack:false})
    // }
    handleCloseCustomizadSnack(){
        this.setState({ open : false})
    }
    render(){
        return(<div>
 <div className="container">  
                        <div class="row" className="hdr">    
                        <div class="col-sm-12 btn btn-info">    
                        React Bootstrap Table with Searching and Custom Pagination   
                         </div>    
                          </div>    
                        <div  style={{ marginTop: 20 }}>  
                        <BootstrapTable   
                        striped  
                        hover  
                        keyField='id'   
                        data={ this.state.users }   
                        columns={ this.state.columns } />  
                      </div>  
                      </div>   
                  {/* <CustomizedSnackbars action={this.state.mode} message={this.state.message} open={this.state.open} handleClose={this.handleCloseCustomizadSnack.bind(this)} handleRequest={this.handleDelete.bind(this)}/> */}
                   </div>
        )
    }
}