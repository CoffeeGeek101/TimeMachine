import { add } from "../operations/add";
import type { state } from "./statemachine";

export type operations = {
    name : string;
    apply : (state : state) => state;
}

export const operationMap = {
    "add" : add
}