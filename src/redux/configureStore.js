import { createStore, combineReducers } from 'redux';
import { KeyboardCase } from './keyboardCase'
import { KeycapSet } from './keycapSet'
import { Switches } from './switches'
import { Stabilizers } from './stabilizers'

import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
       /*
        combineReducers({
            keyboardCase: KeyboardCase,
            keycapSet: KeycapSet,
            switches: Switches,
            stabilizers: Stabilizers
        })
        */
        Reducer,
        initialState
    );

    return store;
};