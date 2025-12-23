import type { operations } from "./operations";
import type { state } from "./statemachine"

export type pipeline = {
    state : state;
    operations : operations
}

export type snapshot = {
    step : number;
    snapshotId : string;
    operationId : string;
    prevState : state | null;
    nextState : state | null;
}
