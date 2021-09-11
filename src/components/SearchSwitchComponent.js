import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Form, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSwitches({switches}) {
    if(switches) {
        return (
            //<Form onSubmit={this.handleSubmit}>  
                <div classname="col-md-5 m-1">
                    {switches.map(mechSwitch =>
                        <Card onClick={() => alert(`You selected ${mechSwitch.name}`)}>
                            <CardBody>
                                <CardTitle>{mechSwitch.name}</CardTitle>
                                <CardText>{mechSwitch.type}</CardText>
                            </CardBody>
                        </Card>)}
                    
                </div>
           // </Form>
        )
    }
   return <div></div>
}

class SearchSwitch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            type: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSubmit(event) {
        console.log('The chosen switch is' + JSON.stringify(this.state.mechSwitch.name));
        alert('Current switch is: ' + JSON.stringify(this.state.mechSwitch.name));
        event.preventDefault();
    }

    handleSelected(event) {
        this.setState(
            {
                name: event.name,
                type: event.type
            }
        );
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
                                <RenderSwitches switches={this.props.switches} />
                            </div>
                        </div>
                    </div>
                
            </React.Fragment>
        );
    }
}

export default SearchSwitch;