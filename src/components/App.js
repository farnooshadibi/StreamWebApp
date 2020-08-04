import React, {Component} from 'react';
import Header from './sections/Header';
import {Route , Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import '../styles/css/bootstrap.min.css';
import '../styles/css/bootstrap-rtl.min.css';
import NoMatch from './NoMatch';
import User from './User';
import UserList from'./UserList';
import Matris from './Matris';
import Login from './Login';
import Demo from './Demo';
import Register from './Register';
import axios from 'axios';
import 'rsuite/dist/styles/rsuite-default-rtl.css';
import AdminLogin from './AdminLogin';
import Product from './Product';

 class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            isAuthenticate : true
        }
    }
    componentDidMount(){
        let apiToken = localStorage.getItem('api-token');
       // console.log("api token" , apiToken)

        if(apiToken === null){
           this.setState({
               isAuthenticate : false
           })
        }else{
            //axios 
            axios.get(`http://192.168.110.54:5000/api/person/?api_token=${apiToken}`)
            .then( response => this.setState({isAuthenticate :true}))
            

            .catch( (error) => this.setState({isAuthenticate :false}))
            
        }
    }

    handleLogout(){
        localStorage.removeItem('api-token');
        this.setState({ isAuthenticate : false});
    }

    handleLogin(){
        this.setState({ isAuthenticate :true})
    }
     
    render(){
        return(
            <div>
                <Header auth={this.state.isAuthenticate} logout={this.handleLogout.bind(this)} />
                {/* <Demo auth={this.state.isAuthenticate} logout={this.handleLogout.bind(this)}/> */}
                <div className="container">
                <div style={{ paddingTop:80}}>
                <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/admin-login" component={AdminLogin}/>
                <Route path="/matris" component={Matris}/>
                <Route path="/login" render={(props) => <Login {...props} auth={this.state.isAuthenticate} login={this.handleLogin.bind(this)}/>}/>
                <Route path="/register" component={Register} />
                // <Route path="/login" render={(props) => <Login {...props} auth={this.state.isAuthenticate} login={this.handleLogin.bind(this)}/>}/>
                <Route path="/user" component={UserList}/>
                <Route path="/user-profile" component={User}/>
                <Route path="/product/:id"  component={Product} />
                <Route path="/user-profile/:id" component={User}/>
                <Route  component={NoMatch}/>
                </Switch>
                    </div>
                </div>                
            </div>
        )
    }
}
export default App;