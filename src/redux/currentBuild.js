import * as ActionTypes from './ActionTypes';

export const CurrentBuild = (
    state = [], action) => {
    switch (action.type) {
        case ActionTypes.SELECT_KEYBOARDCASE:
            return {...state.currentBuild, currentBuild: action.payload};
        default:
            return state;
    }
};

export default CurrentBuild