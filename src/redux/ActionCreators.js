import * as ActionTypes from './ActionTypes'

export const selectKeyboardCase = (id, name, manufacturer, formType) => ({
    type: ActionTypes.SELECT_KEYBOARDCASE,
    payload: {
        id: id,
        name: name,
        manufacturer: manufacturer,
        formType: formType
    }
})

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