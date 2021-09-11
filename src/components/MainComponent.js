import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import  Home from './HomeComponent';
import Header from './HeaderComponent';
import BuildPlanner from './BuildPlannerComponent';
import SearchKeyboardCase from './SearchKeyboardCaseComponent';
import SearchKeycapSet from './SearchKeycapSetComponent';
import SearchSwitch from './SearchSwitchComponent';

import { CABLE } from '../shared/cable';
import { KEYBOARDCASE } from '../shared/keyboardCase';
import { KEYBOARDS } from '../shared/keyboards';
import { KEYCAPSET } from '../shared/keycapSet';
import { PCB } from '../shared/pcb';
import { PLATE } from '../shared/plate';
import { STABILIZERS } from '../shared/stabilizers';
import { SWITCHES } from '../shared/switches'

const mapStateToProps = state => {
    return {
        switches: state.switches
    };
};

class Main extends Component {

    constructor(props) {
        super(props);
        this.switches = SWITCHES;
        this.keyboardCases = KEYBOARDCASE
    }

    render() {

        
        const HomePage = () => {
            return (
                <Home 
                    mechSwitch={this.props.switches.filter(mechSwitch => mechSwitch.featured)[0]}
                />
            );
        };

        const SwitchWithId = ({match}) => {
            return (
                <SearchSwitch
                    mechSwitch={this.props.switches.filter(mechSwitch => mechSwitch.id === +match.params.mechSwitchId)[0]}
                />
            );
        };    
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/buildplanner' component={BuildPlanner} />
                    <Route path='/switches' render={() => <SearchSwitch switches = {this.switches} />} />
                    <Route path='/keyboardcases' render={() => <SearchKeyboardCase keyboardCases = {this.keyboardCases} />} />
                 </Switch>   
               
                {/*
                <BuildPlanner />
                <SearchKeyboardCase />
                <SearchKeycapSet />
                <SearchSwitch switches/> 
                */}
                
            </div>
        );
    }
}

export default Main;