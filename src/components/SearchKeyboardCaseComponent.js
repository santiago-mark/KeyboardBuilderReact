import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

export const selectKeyboardCase = (state) => {
    return `${state.id} ${state.name} ${state.manufacturer} ${state.formType}`
}

class SearchKeyboardCase extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            id: '',
            name: '',
            manufacturer: '',
            formType: ''
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
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/buildplanner">Build Planner</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Keyboard Cases</BreadcrumbItem>
                </Breadcrumb>
                <Jumbotron className="bg-dark text-white">
                    <h1>Keyboard Cases</h1>
                </Jumbotron>  
   
                <div className="Sidebar">    
                    <Container>
                        Filter
                        <Row><Input type="checkbox" /> Full Size</Row>
                        <Row><Input type="checkbox" /> 1800</Row>
                        <Row><Input type="checkbox" /> TenKeyLess</Row>
                        <Row><Input type="checkbox" /> 75%</Row>
                        <Row><Input type="checkbox" /> 65%</Row>
                        <Row><Input type="checkbox" /> 60%</Row>
                        <Row><Input type="checkbox" /> 40%</Row>
                        <Row><Input type="checkbox" /> Alice</Row>
                        <Row><Input type="checkbox" /> Ergo</Row>
                        <Row><Input type="checkbox" /> Other</Row>
                    </Container>
                </div>

                <div className="Content">
                    <div className="container">
                        <div className="row">
                            <LocalForm model="keyboardCase">  
                                <Row classname="form-group">
                                    {this.props.keyboardCases.map(keyboardCase =>
                                        <Col>
                                            <Card>
                                                <CardBody>
                                                    <CardTitle>{keyboardCase.name}</CardTitle>
                                                    <CardText>{keyboardCase.formType}</CardText>
                                                </CardBody>
                                            </Card>
                                            <Link to="/buildplanner">
                                                <Control.button onClick={() => this.handleSubmit(keyboardCase)} model=".keyboardCase" id="keyboardCase" name="keyboardCase" className="form-control">
                                                Select
                                                </Control.button>
                                            </Link>
                                        </Col>)
                                    }
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                </div>   
            </React.Fragment>
        );
    }
}

export default SearchKeyboardCase;