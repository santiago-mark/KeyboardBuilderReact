import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input } from 'reactstrap';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="App">
              <Main />
              
              {/* This is for the header component

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
              */}

              {/* This is for the build planner
              
                <Jumbotron>
                  <h1>Plan Build</h1>
                </Jumbotron>

                <Container>
                  <Row id="keyboardRow">
                    <Col><h4>Components</h4></Col>
                    <Col><h4>Selection</h4></Col>
                    <Col><h4>Modded?</h4></Col>
                    <Col><h4>Price</h4></Col>
                    <Col><h4>Retailer</h4></Col>
                    <Col md="4"><h4>Information</h4></Col>
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
                        <Input type="price" name="price" id="keyboardCasePrice" />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input type="retailer" name="retailer" id="keyboardCaseRetailer" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Input type="textarea" name="information" id="keyboardCaseInfo" />
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
                        <Input type="price" name="price" id="switchesPrice" />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input type="retailer" name="retailer" id="switchesRetailer" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Input type="textarea" name="text" id="switchesInfo" />
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
                        <Input type="price" name="price" id="platePrice" />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input type="retailer" name="retailer" id="plateRetailer" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Input type="textarea" name="text" id="plateInfo" />
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
                        <Input type="price" name="price" id="cablePrice" />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input type="retailer" name="retailer" id="cableRetailer" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Input type="textarea" name="text" id="cableInfo" />
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
                        <Input type="price" name="price" id="otherPrice" />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input type="retailer" name="retailer" id="otherRetailer" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Input type="textarea" name="text" id="otherInfo" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
              */}

            </div>
          </BrowserRouter>
        );
    }
}

export default App;