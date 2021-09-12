import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Form, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

function RenderSwitches({switches}) {
    if(switches) {
        return (
            <LocalForm onSubmit={values => this.handleSubmit(values)}>  
                <div classname="form-group col-md-5 m-1">
                    {switches.map(mechSwitch =>
                        <Card onClick={() => alert(`You selected ${mechSwitch.name}`)}>
                            <CardBody>
                                <CardTitle>{mechSwitch.name}</CardTitle>
                                <CardText>{mechSwitch.type}</CardText>
                            </CardBody>
                        </Card>)}
                    
                </div>
           </LocalForm>
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

    handleSubmit(values) {
        console.log('Current state is:' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
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