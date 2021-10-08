import { CABLE } from '../shared/cable';
import { KEYBOARDCASE } from '../shared/keyboardCase';
import { KEYBOARDS } from '../shared/keyboards';
import { KEYCAPSET } from '../shared/keycapSet';
import { PCB } from '../shared/pcb';
import { PLATE } from '../shared/plate';
import { STABILIZERS } from '../shared/stabilizers';
import { SWITCHES } from '../shared/switches'

export const initialState = {
    switches: SWITCHES,
    //cable: CABLE,
    //keyboard: KEYBOARDS,
    keyboardCases: KEYBOARDCASE,
    keycapSets: KEYCAPSET,
    //pcb: PCB,
    //plate: PLATE,
    stabilizers: STABILIZERS,
    
}

export const Reducer = (state = initialState, action) => {
    return state;
};