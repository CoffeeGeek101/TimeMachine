// isSidebarOpen
// active Node Sections (ids)
// handler to set Open state
// handler to set active ids (singular)

import { atom } from "jotai";

export const isSidebarOpen_ = atom<boolean>(false);
export const activeNodeSectionId_ = atom<string[]>([]);

export const toggleSidebar_ = atom(get => {
    const sidebarStatus = get(isSidebarOpen_);
    return sidebarStatus;
}, (_, set, next : boolean) => {
    if(!next){
        set(activeNodeSectionId_, [])
    }
    set(isSidebarOpen_, next);
});

export const updateActiveNodeSectionId_ = atom(get => {
    const activeNodeSection = get(activeNodeSectionId_);
    return activeNodeSection[0]; //always contains only one value;
    
}, (get, set, next : string) => {
    let activeNodeSection = get(activeNodeSectionId_);
    let newNodeSection = [];
    if(!activeNodeSection.includes(next)){
        newNodeSection[0] = next;
    }
    set(activeNodeSectionId_, newNodeSection);
})