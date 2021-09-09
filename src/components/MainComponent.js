import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import BuildPlanner from './BuildPlannerComponent';
import SearchKeyboardCase from './SearchKeyboardCaseComponent';
import SearchKeycapSet from './SearchKeycapSetComponent';
import SearchSwitch from './SearchSwitchComponent';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                {/*
                <BuildPlanner />
                <SearchKeyboardCase />
                <SearchKeycapSet />
                */}
                <SearchSwitch />
            </div>
        );
    }
}

export default Main;