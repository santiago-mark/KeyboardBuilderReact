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