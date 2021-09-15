import React, { Component }  from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input } from 'reactstrap';

class BuildPlanner extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
          keyboardCase: '',
          switches: '',
          plate: '',
          cable: '',
          other: '' 
        }

        this.handleSubmit = this.handleSubmit(this);
    }

    handleSubmit(values) {
      console.log("Current state is: " + JSON.stringify(values.state));
      alert("Current state is: " + JSON.stringify(values.state));
  }


    render() {
        return (
            <React.Fragment>
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

                  <LocalForm model="feedbackForm">
                    <Row id="keyboardRow">
                      <Col>
                          <h5>Keyboard Case</h5>
                      </Col>
                      <Col>
                        <Link to="/keyboardcases">
                            <Button color="primary">Select</Button>{''}
                          </Link>
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

                    <Row id="switchesRow" className="form-group">
                      <Col>
                          <h5>Switches</h5>
                      </Col>
                      <Col>
                          <Link to="/switches">
                            <Button color="primary">Select</Button>{''}
                          </Link>
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
                  </LocalForm>
              </Container>
            </React.Fragment>
        );
    }
}

export default BuildPlanner;