import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';
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
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    Keycap Set
                </Jumbotron>  
   
                <div className="Sidebar">
                    <Link to="/buildplanner">
                          <Button color="primary">Back</Button>{''}
                    </Link>           
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
                                            <Control.button onClick={() => this.handleSubmit(keycapSet)} model=".keycapSet" id="keycapSet" name="keycapSet" className="form-control"> Select
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

export default SearchKeycapSet;