import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';

const SWITCHES = [
    {
        /*
        name:
        type: (clicky, linear, tactile, other)
        force:
        manufacturer:
        materialTop:
        materialBottom:
        materialStem:
        springType:
        springWeight:
        
        */
        id: 0,
        name: "Cherry MX Blue",
        type: "Clicky"
    },
    {
        id: 1,
        name: "Cherry MX Red",
        type: "Linear"
    },
    {
        id: 2,
        name: "Cherry MX Brown",
        type: "Tactile"
    }
]

function RenderSwitches({switches}) {
    if(switches) {
        return (
            <div classname="col-md-5 m-1">
                {switches.map(mechSwitch =>
                    <Card>
                        <CardBody>
                            <CardTitle>{mechSwitch.name}</CardTitle>
                            <CardText>{mechSwitch.type}</CardText>
                        </CardBody>
                    </Card>)}
                
            </div>
        )
    }
   return <div></div>
}

{/*
function SearchSwitch(props){

    if (props.switches) {
        return (
            <div className="container">
                <div className="row">
                    <RenderSwitches switches={props.switches} />
                </div>
            </div>
        )
    }
    return <div />
}
*/}

class SearchSwitch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    Switches
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
                                <RenderSwitches switches={SWITCHES} />
                            </div>
                        </div>
                        {/*
                        <CardDeck>
                        
                        <Card>
                            <CardBody>
                                <CardTitle>{SWITCHES[0].name}</CardTitle>
                                <CardText>{SWITCHES[1].type}</CardText>
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
                            <Card>
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                            </Card>
                        </CardDeck>

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
                        */}
                    </div>
                
            </React.Fragment>
        );
    }
}

export default SearchSwitch;