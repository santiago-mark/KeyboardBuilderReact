import { createStore, combineReducers, applyMiddleware } from 'redux';
import { KeyboardCase } from './keyboardCase'
import { KeycapSet } from './keycapSet'
import { Switches } from './switches'
import { Stabilizers } from './stabilizers'
//import thunk from 'redux-thunk';
//import logger from 'redux-logger';

import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
   const store = createStore(
      combineReducers({
            keyboardCases: KeyboardCase,
            keycapSets: KeycapSet,
            switches: Switches,
            stabilizers: Stabilizers
        }),
        //applyMiddleware(thunk, logger)
        //Reducer,
        //initialState
    );

    return store;
};