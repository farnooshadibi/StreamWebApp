 import React ,{Component,Fragment} from 'react'
 //import IntegrationNotistack from './IntegrationNotistack'
 import ConsecutiveSnackbars from './ConsecutiveSnackbars'
// import CustomizedSnackbars from './CustomizedSnackbars'
 import AlertDialog from './AlertDialog'
import FormDialog from './FormDialog'
import ResponsiveFullScreen from './ResponsiveFullScreen'
import ConfirmationDialog from './ConfirmationDialog'
import DraggableDialog from './DraggableDialog'
import AlertDialogClass from './AlertDialogClass'
import PersistentDrawerRight from './PersistentDrawerRight'
import GmailTreeView from './GmailTreeView'
import ControlledTreeView from './ControlledTreeView'
import Animation from './Animation'
import  CustomizedHook from './CustomizadHook'
import { Button } from 'rsuite';
// import default style
import 'rsuite/dist/styles/rsuite-default.css';
//import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'
import Demo from './Demo'
import LineCharts from './Charts/LineCharts'

const styles = {
  padding: 20,
  textAlign: "center"
};


export default class About extends Component{
    constructor(props){
        super(props);
        this.state={
          open:false,
          message:" "
        }
    }

     handleClick() {
        this.props.setOpen(true);
      }
    
     handleClose(event, reason) {
        if (reason === 'clickaway') {
          return;
        }
    
        this.props.setOpen(false);
      }

      handleAlert()
      {
        window.location.href = '/user'; 
        this.setState({ open : false})
      }
      handleFormDialog(){
        window.location.href = '/matris'; 
      }

       ListItem({ item }) {
        return (
          <Fragment>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </Fragment>
        );
      }
      
      Glossary(props) {
        return (
          <dl>
            {props.items.map(item => (
              // Fragments should also have a `key` prop when mapping collections
              <Fragment key={item.id}>
                <dt>{item.term}</dt>
                <dd>{item.description}</dd>
              </Fragment>
            ))}
          </dl>
        );
      }
    
    render(){
        return(
            <div>
                <h2> About </h2>
                {/* <IntegrationNotistack /> */}
                {/* <ConsecutiveSnackbars /> */}
               <AlertDialog message={"آیا مایل به حذف هستید؟"} dialogTitle={"حذف کاربر"} handleClose={this.handleAlert.bind(this)}/>
               <br />
               <FormDialog message={"به منظور ادامه ایمیل خود را وارد کنید ..."} dialogTitle={"مثال دیالوگ فرمی"} handleClose={this.handleFormDialog.bind(this)}/>
               <br />
               <ResponsiveFullScreen message={"...."} dialogTitle={" آیا برای این اکشن مطمین هستید ؟"} handleClose={this.handleAlert.bind(this)}/>
               <br />
               <ConfirmationDialog message={"این یک متن تستی است"} title1={"حافظه"} dialogTitle={"زنگ تلفن"} title2={"پیش فرض "}  handleClose={this.handleAlert.bind(this)}/>
               
                <br />
                <DraggableDialog message={"این یک متن تستی است"} dialogTitle={" مثال دیالوگ درگیبل"}  handleClose={this.handleAlert.bind(this)}/>
                <br />
                <AlertDialogClass message={"این یک متن تستی است"} dialogTitle={" مثال دیالوگ درگیبل"}  handleClose={this.handleAlert.bind(this)}/>
                <br />
                <PersistentDrawerRight />
                <br />
                {/* <GmailTreeView /> */}
                <br />
                {/* <ControlledTreeView /> */}
                <Animation />
                <br />
                {/* < CustomizedHook /> */}
                <br />
                <div style={styles}>
                <Button>Hello World</Button>
                </div>
                <Button color="green" appearance="ghost">
               Green
               </Button>
               <Button color="green">Green</Button>
               <br />
               <Demo />
               <br />
               {/* <LineCharts /> */}
                

          </div>
        )
    }
}



