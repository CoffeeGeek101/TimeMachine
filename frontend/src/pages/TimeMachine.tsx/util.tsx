import { ArrowsDownUpIcon, AsteriskSimpleIcon, DresserIcon, FunctionIcon } from "@phosphor-icons/react";

export const sidebarOptions = [
    {
        name : "Data Structures",
        des : "data structures you want to use",
        type : "nested",
        logo : ({...props}) => <DresserIcon {...props}/>,
        index : "ds-0"
    },
    {
        name : "Variables",
        des : "variables (Gobal/Local) you want to use",
        type : "nested",
        logo : ({...props}) => <AsteriskSimpleIcon {...props}/>,
        index : "vr-1"
    },
    {
        name : "Operations",
        des : "operations you want to perform", 
        type : "nested",
        logo : ({...props}) => <FunctionIcon {...props}/>,
        index : "op-2"
    },
    {
        name : "Pointers",
        type : "pure",
        des : "pointers are the starting point of iterations",
        logo : ({...props}) => <ArrowsDownUpIcon {...props}/>,
        index : "pt-3"
    },
];

// "Data Structures", "Variables", "Operations", "Pointers"