import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Route, BrowserRouter, NavLink, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Dashboard from './protected/Dashboard'
import {Footer} from '../helpers/Footer.js'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'custom_modules/css/plugins-css.css';
import 'custom_modules/css/mega-menu/mega_menu.css';
import 'custom_modules/css/default.css';
import 'custom_modules/css/style.css';
import 'custom_modules/css/responsive.css';
import 'custom_modules/css/custom.css';
import 'custom_modules/css/font-awesome-4.7.0/css/font-awesome.css';
import 'bootstrap/dist/js/bootstrap.js';
function PrivateRoute ({component: Component, authed,location,...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}
function PublicRoute ({component: Component, authed,location, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to={location.pathname} />}
    />
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      loading: true,
      location: window.location.pathname
    }
    
  }
  componentDidMount () {
    var self = this;
    axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    // axios.get('http://localhost/AD/AD.php',{"user":56789})
    // .then(function (response) {
    //   self.setState({
    //     authed: true,
    //     loading: false,
    //   })
    // })
    // .catch(function (error) {
    //    self.setState({
    //       authed: false,
    //       loading: false
    //     })
    // });
    var dataUser = {"user":56789};
    axios.post('http://localhost/AD/AD.php', dataUser )
    .then(function (response) {
      var data = response.data.valid;
      if(data){
        self.setState({
          authed: true,
          loading: false,
          path: '',
          userDetails: dataUser
        })  
      }else{
        self.setState({
         authed: false,
         loading: false,
         userDetails: dataUser
       })
      }
    })
    .catch(function (error) {
      self.setState({
         authed: false,
         loading: false
       })
    });
  }

  componentWillUnmount () {
    this.removeListener()
  }

  componentWillReceiveProps() {
    debugger;
  }

  render() {
    return this.state.loading === true ? 
    <div id="preloader">
        <div className="clear-loading"><img id="logo_img" src={require('../../image/loader_ef_logo.png')} alt="logo" /></div>
        <div className="clear-loading loading-effect"> <span></span> </div>
    </div>
     : (
      <div>
        <BrowserRouter {...this.props}>
        <div>
            <header id="header" className="header">
              <nav className="navbar mega-menu">
                  <div className="container">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                     <NavLink  exact to="/"><img id="" src={require('../../image/logo.png')} alt="logo" /></NavLink>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse ">
                      <ul className="nav navbar-nav navbar-right menu-links">
                        <li><NavLink  exact to="/"><i className="fa fa-home" /> Home </NavLink></li>
                        <li><NavLink  to="/dashboard"><i className="fa fa-bullhorn fa-indicator" /> Speaker</NavLink></li>
                        <li><a href=""><i className="fa fa-calendar fa-indicator" /> Schedule </a></li>
                          <li className="dropdown">
                                  <a className="dropdown-toggle" data-toggle="dropdown" href=""><i className="fa fa-rss fa-indicator" /> Blog
                                  <span className="caret"></span></a>
                                  <ul className="dropdown-menu">
                                    <li><a href="">Blog 1-1</a></li>
                                    <li><a href="">Blog 1-2</a></li>
                                    <li><a href="">Blog 1-3</a></li>
                                  </ul>
                                </li>
                        <li><a href=""><i className="fa fa-envelope-o fa-indicator" /> Contact <i className="fa fa-address-card fa-indicator" /></a></li>
                        <li>
                          {this.state.authed
                            ? <a href="/"><i className="fa fa-user fa-indicator" /> Logout </a>
                            : <NavLink  to="/login"><i className="fa fa-user fa-indicator" /> Login</NavLink>
                          }
                        </li>

                      </ul>
                    </div>{/*/.nav-collapse */}
                  </div>
                </nav>
              </header>
                <Switch>
                  <Route path='/' exact component={Home} />
                  <PublicRoute authed={this.state.authed} path='/login' name="login" component={Login} />
                  <PrivateRoute data="" authed={this.state.authed} path='/dashboard' component={Dashboard} />
                  <Route render={() => <h3>No Match</h3>} />
                </Switch>
                <Footer/>  
              </div>       
          </BrowserRouter>
      </div>
    );
  }
}

