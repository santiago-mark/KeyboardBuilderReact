import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

class SearchKeycapSet extends Component {
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
        //this.props.setKeycapSet(values);
    }

    render() {
        return (
            <React.Fragment>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/buildplanner">Build Planner</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Keycap Set</BreadcrumbItem>
                </Breadcrumb>
                <Jumbotron className="bg-dark text-white">
                    <h1>Keycap Set</h1>
                </Jumbotron>  
   
                <div className="Sidebar">          
                    <Container>
                        Filter
                        <Row><Input type="checkbox" /> PBT</Row>
                        <Row><Input type="checkbox" /> GMK</Row>
                        <Row><Input type="checkbox" /> KAT</Row>
                    </Container>
                </div>

                <div className="Content">
                    <div className="container">
                        <div className="row">
                            <LocalForm model="keycapSet">  
                                <Row classname="form-group">
                                    {this.props.keycapSets.map(keycapSet =>
                                        <Col>
                                            <Card>
                                                <CardBody>
                                                    <CardTitle>{keycapSet.name}</CardTitle>
                                                    <CardText>{keycapSet.formType}</CardText>
                                                </CardBody>
                                            </Card>
                                            <Link to="/buildplanner">
                                                <Control.button onClick={() => this.handleSubmit(keycapSet)} model=".keycapSet" id="keycapSet" name="keycapSet" className="form-control"> Select
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

export default SearchKeycapSet;