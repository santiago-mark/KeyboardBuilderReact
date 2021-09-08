import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';

class SearchKeyboardCase extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    Keyboard Cases
                </Jumbotron>  

                <Row>            
                    <Col md="1">
                        Filter
                        <Col><Input type="checkbox" /> Full Size</Col>
                        <Col><Input type="checkbox" /> 1800</Col>
                        <Col><Input type="checkbox" /> TenKeyLess</Col>
                        <Col><Input type="checkbox" /> 75%</Col>
                        <Col><Input type="checkbox" /> 65%</Col>
                        <Col><Input type="checkbox" /> 60%</Col>
                        <Col><Input type="checkbox" /> 40%</Col>
                        <Col><Input type="checkbox" /> Alice</Col>
                        <Col><Input type="checkbox" /> Ergo</Col>
                        <Col><Input type="checkbox" /> Other</Col>
                    </Col>

                    <Col>
                    <CardDeck>
                        {/*
                        <Navigation
                        // you can use your own router's api to get pathname
                        activeItemId="/management/members"
                        onSelect={({itemId}) => {
                            // maybe push to the route
                        }}
                        
                        items={[
                            {
                            title: 'Dashboard',
                            itemId: '/dashboard',
                            // you can use your own custom Icon component as well
                            // icon is optional
                            
                            },
                            {
                            title: 'Management',
                            itemId: '/management',
                            
                            subNav: [
                                {
                                title: 'Projects',
                                itemId: '/management/projects',
                                // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                                
                                },
                                {
                                title: 'Members',
                                itemId: '/management/members',
                                
                                },
                            ],
                            },
                            {
                            title: 'Another Item',
                            itemId: '/another',
                            subNav: [
                                {
                                title: 'Teams',
                                itemId: '/management/teams',
                                },
                            ],
                            },
                        ]}
                        /> */}

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

export default SearchKeyboardCase;