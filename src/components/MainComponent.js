import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import BuildPlanner from './BuildPlannerComponent';
import SearchKeyboardCase from './SearchKeyboardCaseComponent';
import SearchKeycapSet from './SearchKeycapSetComponent';
import SearchSwitch from './SearchSwitchComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import SearchStabilizers from './SearchStabilizersComponent';
import { selectKeyboardCase } from '../redux/ActionCreators';
import { CurrentBuild } from '../redux/currentBuild';
//import { selectKeyboardCase } from './SearchKeyboardCaseComponent';
import KeyboardCaseDetails from './KeyboardCaseDetails'
import KeyboardCaseListing from './KeyboardCaseListing'

const mapStateToProps = (state) => {
    return {
        //cable: state.cable,
        keyboardCases: state.keyboardCases,
        keycapSets: state.keycapSets,
        //pcb: state.pcb,
        //plate: state.plate,
        stabilizers: state.stabilizers,
        switches: state.switches,
        currentBuild: state.currentBuild
    };
};

const mapDispatchToProps = {
    selectKeyboardCase: (keyboardCase) => (selectKeyboardCase(keyboardCase))
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
                    currentBuild={this.props.currentBuild}
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
                    <Route exact path="/keyboardCases" component={KeyboardCaseListing} />
                    <Route exact path="/keyboardCases/:keyboardCaseID" component={KeyboardCaseDetails} />
                    <Route exact path='/keycapset' render={() => <SearchKeycapSet keycapSets = {this.props.keycapSets} />} />
                    <Route exact path='/switches' render={() => <SearchSwitch switches = {this.props.switches} />} />
                    <Route exact path='/stabilizers' render={() => <SearchStabilizers stabilizers = {this.props.stabilizers} />} />
                    {/*
                    <Route exact path="/" component={Products} />
                    <Route exact path="/build" component={Build} />
                    */}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
