import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'custom_modules/css/plugins-css.css';
import 'custom_modules/css/mega-menu/mega_menu.css';
import 'custom_modules/css/default.css';
import 'custom_modules/css/style.css';
import 'custom_modules/css/responsive.css';
import 'custom_modules/css/custom.css';
import 'custom_modules/css/font-awesome-4.7.0/css/font-awesome.css';

import 'bootstrap/dist/js/bootstrap.js';

export class Header extends Component {
  render () {
    return (

/*<BrowserRouter>
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">Data</Link>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                  <Link to="/" className="navbar-brand">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
                </li>
                <li>
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          // logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                      </span>}
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>*/
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
                   <a href=""><img id="" src={require('../../image/logo.png')} alt="logo" /> </a>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse ">
                    <ul className="nav navbar-nav navbar-right menu-links">
                      <li className="active"><a href=""><i className="fa fa-home" /> Home </a></li>
                      <li><a href=""><i className="fa fa-bullhorn fa-indicator" /> Speaker </a></li>
                      <li><a href=""><i className="fa fa-calendar fa-indicator" /> Schedule </a></li>
                        {/* drop down multilevel  */}
                        <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#"><i className="fa fa-rss fa-indicator" /> Blog
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                  <li><a href="">Blog 1-1</a></li>
                                  <li><a href="">Blog 1-2</a></li>
                                  <li><a href="">Blog 1-3</a></li>
                                </ul>
                              </li>
                      <li><a href=""><i className="fa fa-envelope-o fa-indicator" /> Contact <i className="fa fa-address-card fa-indicator" /></a></li>
                      <li><a href=""><i className="fa fa-user fa-indicator" /> Login <i className="fa fa-user fa-indicator" /></a></li>
                    </ul>
                  </div>{/*/.nav-collapse */}
                </div>
              </nav>
    	   </header>

    )
  }
}
