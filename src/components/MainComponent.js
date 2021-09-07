import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import BuildPlanner from './BuildPlannerComponent';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <BuildPlanner />
            </div>
        );
    }
}

export default Main;