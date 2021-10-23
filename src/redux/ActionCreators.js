import * as ActionTypes from './ActionTypes'

export const setKeyboardCases  = (keyboardCases) => ({
    type: ActionTypes.SET_KEYBOARDCASE,
    payload: {
        keyboardCases
    }
})

export const selectKeyboardCase = (keyboardCase) => ({
    type: ActionTypes.SELECT_KEYBOARDCASE,
    payload: {
        keyboardCase
    }
})

export const loadKeyboardCases = (keyboardCases) => ({
    type: ActionTypes.LOAD_KEYBOARDCASES,
    payload: keyboardCases
})

/*
export const selectKeyboardCase = (id, name, manufacturer, formType) => ({
    type: ActionTypes.SELECT_KEYBOARDCASE,
    payload: {
        id: id,
        name: name,
        manufacturer: manufacturer,
        formType: formType
    }
})
*/
export const selectKeycapSet  = (id, name, manufacturer) => ({
    type: ActionTypes.SELECT_KEYCAPSET,
    payload: {
        id: id,
        name: name,
        manufacturer: manufacturer
    }
})

export const selectStabilizers  = (id, name, manufacturer) => ({
    type: ActionTypes.SELECT_STABILIZERS,
    payload: {
        id: id,
        name: name,
        manufacturer: manufacturer
    }
})

export const selectSwitches  = (id, name, type) => ({
    type: ActionTypes.SELECT_SWITCHES,
    payload: {
        id: id,
        name: name,
        type: type
    }
})

export const loadKeycapSets = (keycapSets) => ({
    type: ActionTypes.LOAD_KEYCAPSETS,
    payload: keycapSets
})

export const setKeycapSet = (keycapSet) => ({
    type: ActionTypes.SET_KEYCAPSET,
    payload: keycapSet
})