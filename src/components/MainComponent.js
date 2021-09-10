import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import  Home from './HomeComponent';
import Header from './HeaderComponent';
import BuildPlanner from './BuildPlannerComponent';
import SearchKeyboardCase from './SearchKeyboardCaseComponent';
import SearchKeycapSet from './SearchKeycapSetComponent';
import SearchSwitch from './SearchSwitchComponent';

const mapStateToProps = state => {
    return {
        switches: state.switches
    };
};

class Main extends Component {

    constructor(props) {
        super(props);
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
                    <Route path='/switches' render={() => <SearchSwitch switches = {this.props.switches} />} />
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