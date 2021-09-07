import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input } from 'reactstrap';
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

                <Jumbotron>
                  <h1>Plan Build</h1>
                </Jumbotron>

                <Container>
                  <Row id="keyboardRow">
                    <Col><h3>Components</h3></Col>
                    <Col><h3>Selection</h3></Col>
                    <Col><h3>Modded?</h3></Col>
                    <Col><h3>Price</h3></Col>
                    <Col><h3>Retailer</h3></Col>
                    <Col><h3>Information</h3></Col>
                  </Row>

                  <Row id="keyboardRow">
                    <Col>
                        <h5>Keyboard Case</h5>
                    </Col>
                    <Col>
                        <Button color="primary">Select</Button>{''}
                    </Col>
                    <Col>
                        <Input type="checkbox" />
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                  </Row>

                  <Row id="switchesRow">
                    <Col>
                        <h5>Switches</h5>
                    </Col>
                    <Col>
                        <Button color="primary">Select</Button>{''}
                    </Col>
                    <Col>
                        <Input type="checkbox" />
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                  </Row>
                  
                  <Row id="plateRow">
                    <Col>
                        <h5>Plate</h5>
                    </Col>
                    <Col>
                        <Button color="primary">Select</Button>{''}
                    </Col>
                    <Col>
                        <Input type="checkbox" />
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                  </Row>

                  <Row id="cableRow">
                    <Col>
                        <h5>Cable</h5>
                    </Col>
                    <Col>
                        <Button color="primary">Select</Button>{''}
                    </Col>
                    <Col>
                        <Input type="checkbox" />
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                  </Row>

                  <Row id="otherRow">
                    <Col>
                        <h5>Other</h5>
                    </Col>
                    <Col>
                        <Button color="primary">Select</Button>{''}
                    </Col>
                    <Col>
                        <Input type="checkbox" />
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Col>
                  </Row>
                </Container>
            </div>
        );
    }
}

export default App;