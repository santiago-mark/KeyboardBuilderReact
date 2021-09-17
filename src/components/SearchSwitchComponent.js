import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Form, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
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
                 <Breadcrumb>
                    <BreadcrumbItem><Link to="/buildplanner">Build Planner</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Switches</BreadcrumbItem>
                </Breadcrumb>
                <Jumbotron className="bg-dark text-white">
                    <h1>Switches</h1>
                </Jumbotron>     

                <div className="Sidebar">
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
                                        <Link to="/buildplanner">
                                            <Control.button onClick={() => this.handleSubmit(mechSwitch)} model=".switch" id="switch" name="switch" className="form-control"> Select
                                            </Control.button>
                                        </Link>
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