import React, { useState } from "react";
import type { operations } from "../types/operations";
import type { state } from "../types/statemachine"
import { type snapshot } from "../types/pipeline";
import { v4 as uuidv4} from 'uuid'

type PipelineHookI = {
    stateMachine : state;
    operations : operations[];
}

export const usePipeline = ({stateMachine, operations} : PipelineHookI) => {

    const [snapshots, setSnapshots] = useState<snapshot[]>([]);

    const runPipeline = () : void => {

        let updatedStateMachine = stateMachine;
        let snapshots = [];
        let count = 0;

        for(let i = 0; i < operations.length; i++){
            const operation = operations[i];
            while(updatedStateMachine.pointer < updatedStateMachine.shells.length){
                
                const previousStateMachine = updatedStateMachine;
                const nextStateMachine = operation.apply(updatedStateMachine);
                updatedStateMachine = nextStateMachine;
                count++;

                const snapshot : snapshot = {
                    step: count,
                    snapshotId: uuidv4(),
                    operationId: operation.name,
                    prevState: previousStateMachine,
                    nextState: nextStateMachine
                }
                // console.log(snapshot)
                snapshots.push(snapshot);
            }
        }
        console.log(snapshots, "from engine")
        setSnapshots(snapshots);
    }

    return {snapshots, runPipeline}
}