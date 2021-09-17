import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

class SearchStabilizers extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            id: '',
            name: '',
            manufacturer: '',
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
                    <BreadcrumbItem active>Stabilizers</BreadcrumbItem>
                </Breadcrumb>
                <Jumbotron className="bg-dark text-white">
                    <h1>Stabilizers</h1>
                </Jumbotron>  
   
                <div className="Sidebar">     
                    <Container>
                        Filter
                        <Row><Input type="checkbox" />Durock</Row>
                        <Row><Input type="checkbox" />C3</Row>
                    </Container>
                </div>

                <div className="Content">
                    <div className="container">
                        <div className="row">
                            <LocalForm model="stabilizers">  
                                <Row classname="form-group">
                                    {this.props.stabilizers.map(stabilizer =>
                                        <Col>
                                            <Card>
                                                <CardBody>
                                                    <CardTitle>{stabilizer.name}</CardTitle>
                                                    <CardText>{stabilizer.formType}</CardText>
                                                </CardBody>
                                            </Card>
                                            <Link to="/buildplanner">
                                                <Control.button onClick={() => this.handleSubmit(stabilizer)} model=".stabilizer" id="stabilizer" name="stabilizer" className="form-control"> Select
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

export default SearchStabilizers;