import React, { Component } from 'react';
import  Home from './HomeComponent';
import Header from './HeaderComponent';
import BuildPlanner from './BuildPlannerComponent';
import SearchKeyboardCase from './SearchKeyboardCaseComponent';
import SearchKeycapSet from './SearchKeycapSetComponent';
import SearchSwitch from './SearchSwitchComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        cable: state.cable,
        keyboardCases: state.keyboardCases,
        keycapSets: state.keycapSets,
        pcb: state.pcb,
        plate: state.plate,
        stabilizers: state.stabilizers,
        switches: state.switches
    };
};

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home 
                    switches={this.props.switches.filter(mechSwitch => mechSwitch.featured)[0]}
                />
            );
        };

        const SwitchWithId = ({match}) => {
            return (
                <SearchSwitch
                    switches={this.props.switches.filter(mechSwitch => mechSwitch.id === +match.params.mechSwitchId)[0]}
                />
            );
        };    
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/buildplanner' component={BuildPlanner} />
                    <Route exact path='/switches' render={() => <SearchSwitch switches = {this.props.switches} />} />
                    <Route path ='/switches/:switechId' component={SwitchWithId} />
                    <Route path='/keyboardcases' render={() => <SearchKeyboardCase keyboardCases = {this.props.keyboardCases} />} />
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

export default withRouter(connect(mapStateToProps)(Main));
