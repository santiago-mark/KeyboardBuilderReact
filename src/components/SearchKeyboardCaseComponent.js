import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderKeyboardCases({keyboardCases}) {
    if(keyboardCases) {
        return (
            <div classname="col-md-5 m-1">
                {keyboardCases.map(keyboardCase =>
                    <Card onClick={() => alert(`You picked ${keyboardCase.name}`)}>
                        <CardBody>
                            <CardTitle>{keyboardCase.name}</CardTitle>
                            <CardText>{keyboardCase.formType}</CardText>
                        </CardBody>
                    </Card>)}
                
            </div>
        )
    }
   return <div></div>
}
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
   
                <div className="Sidebar">
                    <Link to="/buildplanner">
                          <Button color="primary">Back</Button>{''}
                    </Link>           
                    <Container>
                        Filter
                        <Row><Input type="checkbox" /> Full Size</Row>
                        <Row><Input type="checkbox" /> 1800</Row>
                        <Row><Input type="checkbox" /> TenKeyLess</Row>
                        <Row><Input type="checkbox" /> 75%</Row>
                        <Row><Input type="checkbox" /> 65%</Row>
                        <Row><Input type="checkbox" /> 60%</Row>
                        <Row><Input type="checkbox" /> 40%</Row>
                        <Row><Input type="checkbox" /> Alice</Row>
                        <Row><Input type="checkbox" /> Ergo</Row>
                        <Row><Input type="checkbox" /> Other</Row>
                    </Container>
                </div>

                <div className="Content">
                    <div className="container">
                        <div className="row">
                            <RenderKeyboardCases keyboardCases={this.props.keyboardCases} />
                        </div>
                    </div>
                </div>   
            </React.Fragment>
        );
    }
}

export default SearchKeyboardCase;