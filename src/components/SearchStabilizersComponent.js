import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';
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
                <Jumbotron>
                    Keyboard Cases
                </Jumbotron>  
   
                <div className="Sidebar">
                    <Link to="/buildplanner">
                          <Button color="primary">Back</Button>{''}
                    </Link>           
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
                                            <Control.button onClick={() => this.handleSubmit(stabilizer)} model=".stabilizer" id="stabilizer" name="stabilizer" className="form-control"> Select
                                            </Control.button>
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