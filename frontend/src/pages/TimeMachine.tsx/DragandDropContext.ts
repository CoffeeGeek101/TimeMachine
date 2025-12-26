// when we start dragging we need to store some data of which node we are dragging or dragged.
// the data for V1 will be : nodeType, label

import { atom } from "jotai";

export type dragState = {
    nodeType : string;
    label : string;
}

export const dragState = atom<dragState | null>(null);

// now I need an atom to update the dragState atom 
export const updateDragState = atom(null, 
(_, set, next : dragState | null) => {
    set(dragState, next);
})