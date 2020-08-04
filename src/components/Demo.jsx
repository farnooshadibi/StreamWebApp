import React ,{Component,Fragment} from 'react'
import { Navbar, Nav, Dropdown, Icon, Button } from 'rsuite';
import { Link } from 'react-router-dom';
 
  export default class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.handleSelect = this.handleSelect.bind(this);
      this.state = {
        activeKey: null
      };
    }
    login(){
        console.log("2222")        
        window.location.href("/Login");
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
    render() {
      const{ auth : isAuthenticate} = this.props;
      const { activeKey } = this.state;
      return (
        <div className="nav-wrapper">         
          {/* <NavBarInstance appearance="inverse" activeKey={activeKey} onSelect={this.handleSelect} /> */}
          <Navbar>
        <Navbar.Header>
          <a href="#" className="navbar-brand logo">
            داشبورد
          </a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav onSelect={this.props.onSelect} activeKey={activeKey}>
            <Nav.Item eventKey="1" href="/" icon={<Icon icon="home" />}>
              خانه
            </Nav.Item>
            <Nav.Item  eventKey="2" href="/user">کاربران</Nav.Item>
            <Nav.Item eventKey="3">محصولات</Nav.Item>
            <Dropdown title="درباره ما">
              <Dropdown.Item eventKey="4">شرکت</Dropdown.Item>
              <Dropdown.Item eventKey="6">ارتباط با ما</Dropdown.Item>
            </Dropdown>
          </Nav>
          {
      isAuthenticate
      ? (
        <div>
           <Nav pullRight>
          <Link className="btn btn-success" style={{marginLeft:5, marginTop:10}} to="/user">کاربران </Link>
          <Link className="btn btn-warning" style={{marginLeft:5, marginTop:10}} to="/"  onClick={this.props.logout}>خروج </Link>
          </Nav>
        </div>
      ) : (
        <div>
          <Nav pullRight>
          <Link className="btn btn-success" style={{marginLeft:5, marginTop:10}} to="/login">ورود</Link>
          <Link className="btn btn-success" style={{marginLeft:5, marginTop:10}} to="/register"> ثبت نام</Link>
          </Nav>
        </div>
      )
    }
          {/* <Nav pullRight>
          <Link className="btn btn-success" style={{marginLeft:5, marginTop:10}} to="/login">ورود</Link>
          <Link className="btn btn-success" style={{marginLeft:5, marginTop:10}} to="/register"> ثبت نام</Link>
          </Nav> */}
          {/* <Nav pullRight>
            <Nav.Item icon={<Icon icon="cog" />}>تنظیمات کاربری</Nav.Item>
          </Nav> */}
        </Navbar.Body>
      </Navbar>
        </div>
      );
    }
  }
  