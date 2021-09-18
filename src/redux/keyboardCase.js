import { KEYBOARDCASE } from "../shared/keyboardCase";
import * as ActionTypes from './ActionTypes';

export const KeyboardCase = (state = KEYBOARDCASE, action) => {
    switch (action.type) {
        case ActionTypes.SELECT_KEYBOARDCASE:
            const keyboardCase = action.payload;
            return state.concat(keyboardCase);
        default:
            return state;
    }
};