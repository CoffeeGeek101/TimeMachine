import { useEffect, useState } from "react";
import { type shells, type state } from "../types/statemachine";

type StateMachineHook = {
    initialData : number[],
    pointer : number,
    initialGlobal : number;
}

export const useStateMachine = ({initialData, initialGlobal, pointer} : StateMachineHook) => {

    const generateInitialState = () : state => {
        return {
            shells : [],
            pointer : 0,
            global : {
                accumulator : 0
            }
        }
    }

    const [stateMachine, setStateMachine] = useState<state>(()=>generateInitialState());

    const createInitialStateMachine = () : state => {
        let shells : shells[] = [];
        for(let i = 0; i < initialData.length; i++){
            shells.push({index : i, value : initialData[i]});
        }
        return {
            shells : shells,
            pointer : pointer,
            global : {
                accumulator : initialGlobal
            }
        }
    }   

    useEffect(()=> {
        setStateMachine(createInitialStateMachine());  
    },[])

    return {stateMachine};
}