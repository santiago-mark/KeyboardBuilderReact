import { createStore, combineReducers, applyMiddleware } from 'redux';
import { KeyboardCase } from './keyboardCase'
import { KeycapSet } from './keycapSet'
import { Switches } from './switches'
import { Stabilizers } from './stabilizers'
import { CurrentBuild } from './currentBuild';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import { Reducer, initialState } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const mainReducer = combineReducers({
    keyboardCases: KeyboardCase,
    keycapSets: KeycapSet,
    switches: Switches,
    stabilizers: Stabilizers,
    currentBuild: CurrentBuild,
})
/*
const rootReducer = combineReducers({
    keyboardBuild: Reducer
})
*/
export const ConfigureStore = () => {
   const store = createStore(
        //rootReducer, composeWithDevTools()  
        mainReducer, composeWithDevTools(applyMiddleware(thunk, logger))
        
        //Reducer,
        //initialState, 
        
    );

    return store;
    
};

