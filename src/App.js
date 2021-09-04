import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                  <div className="container">
                      <NavbarBrand href="/">Keyboard Builder</NavbarBrand>
                      <Nav>
                        <NavItem>
                          <NavLink href="/">
                            Login
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/">
                            Register
                          </NavLink>
                        </NavItem>  
                      </Nav>
                  </div>
                </Navbar>
                <Navbar>
                  <div className="container">
                    <Nav>
                      <NavItem>
                        <NavLink href="/">
                          Plan Build
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/">
                          Building Tips
                        </NavLink>
                      </NavItem>  
                      <NavItem>
                        <NavLink href="/">
                          Completed  Builds
                        </NavLink>
                      </NavItem>  
                      <NavItem>
                        <NavLink href="/">
                          Upcoming
                        </NavLink>
                      </NavItem>  
                    </Nav>
                  </div>
                </Navbar>
            </div>
        );
    }
}

export default App;