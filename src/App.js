import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Jumbotron, Container, Row, Col, Label, FormGroup, Button, Input, CardDeck, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';
import {Navigation} from 'react-minimal-side-navigation';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

import './App.css';
import './css/layout.css'

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
        );
    }
}

export default App;