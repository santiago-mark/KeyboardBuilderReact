import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input, NavbarToggler, Collapse,  Modal, ModalHeader, ModalBody, Form } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md" color="dark">
                  <div className="container">
                      <NavbarBrand to="/buildplanner">Keyboard Builder</NavbarBrand>
                      <NavbarToggler onClick={this.toggleNav} />
                      <Nav navbar>
                        <span className="navbar-text ml-auto">
                            <Button color="dark" onClick={this.toggleModal}>
                                <i className="fa fa-sign-in fa-lg" /> Login
                            </Button>
                        </span>
                      </Nav>
                  </div>
                </Navbar>

                <Navbar dark sticky="top" expand="md" color="secondary">
                  <div className="container">
                    <Nav navbar>
                      <NavItem>
                        <NavLink className="nav-link" to="/buildplanner">
                          Plan Build
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to="/">
                          Completed Builds
                        </NavLink>
                      </NavItem>  
                    </Nav>
                  </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;