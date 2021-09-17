import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import BuildPlanner from './BuildPlannerComponent';
import SearchKeyboardCase from './SearchKeyboardCaseComponent';
import SearchKeycapSet from './SearchKeycapSetComponent';
import SearchSwitch from './SearchSwitchComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchStabilizers from './SearchStabilizersComponent';

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
                    keyboardCases={this.props.keyboardCases}
                    keycapSets={this.props.keycapSets}
                    switches={this.props.switches}
                    stabilizers={this.props.stabilizers}
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
                    <Route exact path='/keyboardcases' render={() => <SearchKeyboardCase keyboardCases = {this.props.keyboardCases} />} />
                    <Route exact path='/keycapset' render={() => <SearchKeycapSet keycapSets = {this.props.keycapSets} />} />
                    <Route exact path='/switches' render={() => <SearchSwitch switches = {this.props.switches} />} />
                    <Route exact path='/stabilizers' render={() => <SearchStabilizers stabilizers = {this.props.stabilizers} />} />
                </Switch>   
               
                {/*
                <BuildPlanner />
                <SearchKeyboardCase />
                <SearchKeycapSet />
                <SearchSwitch switches/> 
                                    <Route path ='/switches/:switechId' component={SwitchWithId} />
                */}
                
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
