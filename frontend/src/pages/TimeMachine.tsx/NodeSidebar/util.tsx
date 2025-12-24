import { ArrowsDownUpIcon, AsteriskSimpleIcon, BracketsCurlyIcon, CubeIcon, DresserIcon, FlowArrowIcon, FunctionIcon, PentagramIcon } from "@phosphor-icons/react";
import type { JSX } from "react";

export type sideBarNodesT = {
    name : string;
    des : string;
    type : string;
    logo : ({ ...props }: {[x: string]: any}) => JSX.Element;
    index : string
}

export const sidebarOptions : sideBarNodesT[] = [
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
        logo : ({...props}) => <FlowArrowIcon {...props}/>,
        index : "pt-3"
    },
];

// "Data Structures", "Variables", "Operations", "Pointers"

export type NodeOptionT = {
    name : string,
    logo : ({ ...props }: {[x: string]: any}) => JSX.Element;
    index : string
}

export const NodeOptions : Record<string,NodeOptionT[]> = {
    "ds-0" : [
        {
            name : "Array",
            logo : ({...props}) => <PentagramIcon {...props}/>,
            index : "array-10"
        },
        {
            name : "Stack",
            logo : ({...props}) => <PentagramIcon {...props}/>,
            index : "stack-10"
        },
        {
            name : "LinkedList",
            logo : ({...props}) => <PentagramIcon {...props}/>,
            index : "ll-10"
        },
    ],
    "vr-1" : [
        {
            name : "Global",
            logo : ({...props}) => <CubeIcon {...props}/>,
            index : "var-g"
        },
        {
            name : "Local",
            logo : ({...props}) => <CubeIcon {...props}/>,
            index : "var-l"
        }
    ],
    "op-2" : [
        {
            name : "Addition",
            logo : ({...props}) => <BracketsCurlyIcon {...props}/>,
            index : "op-add"
        }
    ]
}