import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';

class SearchKeycapSet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    Keycap Set
                </Jumbotron>  

                <Row>            
                    <Col md="1">
                        Filter
                        <Col><Input type="checkbox" /> GMK</Col>
                        <Col><Input type="checkbox" /> ABS</Col>
                        <Col><Input type="checkbox" /> PBT</Col>
                        <Col><Input type="checkbox" /> POM</Col>

                    </Col>

                    <Col>
                    <CardDeck>
                       
                        <Card>
                        <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                        </Card>
                        <Card>
                        <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                        </Card>
                        <Card>
                        <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                        </Card>
                    </CardDeck>
                    </Col>
                </Row>    
            </React.Fragment>
        );
    }
}

export default SearchKeycapSet;