import type { state } from "../types/statemachine"


export const add = (state : state) : state => {
// take the current state and do a operations on pointer index. 

    let shells = [...state.shells];
    let updatedGlobal = state.global.accumulator;

    for(let i = 0; i < shells.length; i++){
        if(shells[i].index === state.pointer){
            updatedGlobal += shells[i].value;
        }
    }

    return {
        shells : shells,
        pointer : state.pointer + 1,
        global : {
            accumulator : updatedGlobal
        }
    }

}