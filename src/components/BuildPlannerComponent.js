import React, { Component }  from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input } from 'reactstrap';
//import { selectKeyboardCase } from './SearchKeyboardCaseComponent'
import { selectKeyboardCase } from '../redux/ActionCreators'

/*
const SelectedKeyboardCase = (values) => {
  return (
    selectKeyboardCase(values)
  );
}
*/
class BuildPlanner extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
          keyboardCase: 'test state for keyboard',
          keycapSet: '',
          switches: '',
          stabilizers: '',
          //plate: '',
          //cable: '',
          //other: '' 
          currentBuild: {
            chosenKeyboardCase: ''
          }
          
        }

       // this.handleSubmit = this.handleSubmit(this);
    }
/*}
    handleSubmit(values) {
      console.log("Current state is: " + JSON.stringify(values.state));
      alert("Current state is: " + JSON.stringify(values.state));
  }
*/

    render() {
        return (
            <React.Fragment>
                 <Jumbotron className="bg-dark text-white">
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
                          
                          {this.state.currentBuild.chosenKeyboardCase}
                          
                          {/*
                          <SelectedKeyboardCase keyboardCase = {this.state.keyboardCase} />
                          {selectKeyboardCase(this.state.keyboardCase)}
                          */}
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

                    <Row id="keycapRow">
                      <Col>
                          <h5>Keycap Set</h5>
                      </Col>
                      <Col>
                        <Link to="/keycapset">
                            <Button color="primary">Select</Button>{''}
                          </Link>
                      </Col>
                      <Col>
                          <Input type="checkbox" />
                      </Col>
                      <Col>
                        <FormGroup>
                          <Input type="price" name="price" id="keycapPrice" />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Input type="retailer" name="retailer" id="keycapRetailer" />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Input type="textarea" name="information" id="keycapInfo" />
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
                    
                    <Row id="stabilizersRow">
                      <Col>
                          <h5>Stabilizers</h5>
                      </Col>
                      <Col>
                        <Link to="/stabilizers">
                            <Button color="primary">Select</Button>{''}
                          </Link>
                      </Col>
                      <Col>
                          <Input type="checkbox" />
                      </Col>
                      <Col>
                        <FormGroup>
                          <Input type="price" name="price" id="stabilizerPrice" />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Input type="retailer" name="retailer" id="stabilizerRetailer" />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Input type="textarea" name="information" id="stabilizerInfo" />
                        </FormGroup>
                      </Col>
                    </Row>

{/*
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
*/}
                    <Row>
                      <Button>
                        Submit
                      </Button>
                    </Row>
                  </LocalForm>
              </Container>
            </React.Fragment>
        );
    }
}

export default BuildPlanner;