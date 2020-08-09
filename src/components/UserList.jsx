import React ,{Component} from 'react'
import axios from'axios'
import {Link} from 'react-router-dom'
//import Cookies from 'universal-cookie'
import CustomizedSnackbars ,{} from './CustomizedSnackbars'
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;
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
            fields: {
                name: '',
                image: '',
                url: '',
                }                
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
            const {data} = response.data;
         this.setState({ users : data });
        })
        .catch( error => console.log(error))
    }
    handleClickOpen(id) {
        this.setState({ mode:'delete'})
        //console.log("mode:",this.state.mode)
        this.setState({setOpen:true, open:true, userId:id})
        this.setState({message:"آیا مایل به حذف کاربر هستید؟"})     
        //this.handleDelete(id)
      }    
    handleClose() {
        //setOpen(false);
        this.setState({setOpen:false})
        this.setState({open:false})
      }   
    handleDelete(id) {
        const {userId} = this.state;
        this.setState({mode:'submit'})
      // if (window.confirm("Do you want delete this User?")) {
            axios.delete(`https://localhost:44397/api/user/${userId}`)
                .then(response => {
                    this.setState({ open:true});
                    this.setState({message:"کاربر مورد نظر باموفقیت حذف شد"}); 
                       // alert(response.data);
                        this.getUserList();
                })               
                .catch((error) => {
                    console.log(error);
                    this.setState({ open:true , mode:'error',message:'حذف با خطا مواجه شد'})

                } )
                this.setState({open:false})
       // }
    }
    handleEdit(id){
        //const cookies = new Cookies();
        //cookies.set('userId', id,{path:'/user'})
        //console.log(cookies.get('userId'))       
     }
     handleClick() {
        this.setState({setOpenSnack:true})
        this.setState({openSnack:true})
    } 
     handleCloseSnack(event, reason) {
      if (reason === 'clickaway') {
        return;
      }
      this.setState({setOpenSnack:false})
      this.setState({OpenSnack:false})
    }
    handleCloseCustomizadSnack(){
        this.setState({ open : false})
    }
    render(){
        return(
          
            <div className="box-body rtl" style={{marginBottom:100, marginLeft:100,marginRight:100}}>
              <image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/JoePesci-2009.jpg/1200px-JoePesci-2009.jpg" thumbnail />
            <Link className="btn btn-success rtl" to={{ pathname: '/user-profile', state: {  mode:'add'} }}  >افزودن+</Link>
            <div>
            <Table
          height={400}
          data={this.state.users}
          onRowClick={data => {
            console.log(data);
          }}
        >
           <Column width={70} align="center" fixed>
            <HeaderCell>شماره</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={200} fixed>
            <HeaderCell>نام</HeaderCell>
            <Cell dataKey="name" />
          </Column>

          <Column width={200}>
            <HeaderCell>Url</HeaderCell>
            <Cell dataKey="url" />
          </Column>

          <Column width={200}>
            <HeaderCell> عکس</HeaderCell>
            {/* <Image source={image} /> */}
            <Cell dataKey="image" />
          </Column>

          <Column width={120} fixed="right">
            <HeaderCell>ویرایش</HeaderCell>

            <Cell>
              {rowData => {
                function handleAction() {
                  alert(`id:${rowData.id}`);
                }
                return (
                  <span>
                    <Link  to={{ pathname: '/user-profile', state: { userId: rowData.id , mode:'edit'} }} >ویرایش </Link>
                  </span>
                );
              }}
            </Cell>
          </Column>
          <Column width={120} fixed="right">
            <HeaderCell>حذف</HeaderCell>

            <Cell>
              {rowData => {
                return (
                  <span>                   
                    <a   onClick={ () => { this.handleClickOpen(rowData.id) } }>حذف</a>
                  </span>
                );
              }}
            </Cell>
          </Column>
          </Table>
      </div>                   
           <CustomizedSnackbars action={this.state.mode} message={this.state.message} open={this.state.open} handleClose={this.handleCloseCustomizadSnack.bind(this)} handleRequest={this.handleDelete.bind(this)}/>
            </div>
        )
    }
}