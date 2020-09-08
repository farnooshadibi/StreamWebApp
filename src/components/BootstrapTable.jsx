import React, { Component } from 'react'  
import BootstrapTable from 'react-bootstrap-table-next';  
import axios from 'axios';  
export class Bootstraptab extends Component {  
        state = {  
                employee: [],  
                columns: [{  
                  dataField: 'Id',  
                  text: 'Id'  
                },  
                {  
                  dataField: 'Name',  
                  text: 'Name',  
                 sort:true  
                }, {  
                  dataField: 'Age',  
                  text: 'Age',  
                  sort: true  
                },  
                {  
                        dataField: 'Address',  
                        text: 'Address',  
                        sort: true  
                      },  
                      {  
                        dataField: 'City',  
                        text: 'City',  
                        sort: true  
                      },  
                      {  
                        dataField: 'ContactNum',  
                        text: 'ContactNum',  
                        sort: true  
                      },  
                      {  
                        dataField: 'Salary',  
                        text: 'Salary',  
                        sort: true  
                      },  
                      {  
                        dataField: 'Department',  
                        text: 'Department',  
                        sort: true  
                      }]  
              }  
              componentDidMount() {    
                axios.get('http://localhost:51760/Api/Emp/employee').then(response => {    
                  console.log(response.data);    
                  this.setState({    
                        employee: response.data    
                  });    
                });    
              }   
        render() {  
                return (  
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
                        data={ this.state.employee }   
                        columns={ this.state.columns } />  
                      </div>  
                      </div>  
                )  
        }  
}  
  
export default Bootstraptab  