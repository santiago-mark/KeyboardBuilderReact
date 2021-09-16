import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Form, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

function RenderSwitchItem({mechSwitch}) {
    return (
        <Card>
            <Link to={`/switches/${mechSwitch.id}`}>        
                <CardTitle>{mechSwitch.name}</CardTitle>
            </Link>
        </Card>
    );
}

class SearchSwitch extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            id: '',
            name: '',
            type: ''
        });

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    Switches
                </Jumbotron>     

                    <div className="Sidebar">
                        <Link to="/buildplanner">
                          <Button color="primary">Back</Button>{''}
                        </Link>
                        
                        <Container>
                            <Row>Filter</Row>
                            <Row><Input type="checkbox" /> Clicky</Row>
                            <Row><Input type="checkbox" /> Linear</Row>
                            <Row><Input type="checkbox" /> Tactile</Row>
                        </Container>
                    </div>

                    <div className="Content">
                        <div className="container">
                            <div className="row">
                                <LocalForm model="switches">  
                                    <Row classname="form-group">
                                    {this.props.switches.map(mechSwitch =>
                                        <Col>
                                            <Card >
                                                <CardBody>
                                                    <CardTitle>{mechSwitch.name}</CardTitle>
                                                    <CardText>{mechSwitch.type}</CardText> 
                                                </CardBody>
                                            </Card>
                                            <Control.button onClick={() => this.handleSubmit(mechSwitch)} model=".switch" id="switch" name="switch" className="form-control"> Select
                                            </Control.button>
                                        </Col>
                                        )}
                                    </Row>
                                </LocalForm>
                            </div>
                        </div>
                    </div>
                
            </React.Fragment>
        );
    }
}

export default SearchSwitch;