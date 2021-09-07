import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark color="primary">
                  <div className="container">
                      <NavbarBrand to="/">Keyboard Builder</NavbarBrand>
                      <Nav navbar>
                        <NavItem>
                          <NavLink to="/">
                            Login
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/">
                            Register
                          </NavLink>
                        </NavItem>  
                      </Nav>
                  </div>
                </Navbar>

                <Navbar navbar>
                  <div className="container">
                    <Nav>
                      <NavItem>
                        <NavLink to="/">
                          Plan Build
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/">
                          Building Tips
                        </NavLink>
                      </NavItem>  
                      <NavItem>
                        <NavLink to="/">
                          Completed  Builds
                        </NavLink>
                      </NavItem>  
                      <NavItem>
                        <NavLink to="/">
                          Upcoming
                        </NavLink>
                      </NavItem>  
                    </Nav>
                  </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;