export type state = {
    shells : shells[];
    pointer : number;
    global : {
        accumulator : number;
    }
}

export type shells = {
    index : number;
    value : number;
}
