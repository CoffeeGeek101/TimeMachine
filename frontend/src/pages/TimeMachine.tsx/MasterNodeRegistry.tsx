import type { JSX } from "react";
import { BracketsCurlyIcon, CubeIcon, PentagramIcon } from "@phosphor-icons/react";
import type { NodeOptionT } from "./NodeSidebar/util";
import type { NodeProps } from "@xyflow/react";

type category = "ds-0" | "vr-1" | "op-2"

type master_registryT = {
    name : string,
    component : ({ ...props }: any) => JSX.Element,
    config : any,
    category : category,
    logo : ({ ...props }: any) => JSX.Element,
}

type nodes = "array-10-0" | "stack-10-0" | "ll-10-0" | "var-g" | "var-l" | "op-add"

const MASTER_REGISTRY : Record<nodes,master_registryT> = {
    "array-10-0" : {
        category : "ds-0",
        component : ({})=> <div></div>,
        config : {},
        logo : ({...props}) => <PentagramIcon {...props}/>,
        name : "Array"
    },
    "stack-10-0" : {
        category : "ds-0",
        component : ({}) => <div></div>,
        config : {},
        logo : ({...props}) => <PentagramIcon {...props}/>,
        name : "Stack"
    },
    "ll-10-0" : {
        category : "ds-0",
        component : ({}) => <div></div>,
        config : {},
        logo : ({...props}) => <PentagramIcon {...props}/>,
        name : "LinkedList"
    },
    "var-g" : {
        category : "vr-1",
        component : ({}) => <div></div>,
        config : {},
        logo : ({...props}) => <CubeIcon {...props}/>,
        name : "Global",
    },
    "var-l" : {
        category : "vr-1",
        component : ({}) => <div></div>,
        config : {},
        logo : ({...props}) => <CubeIcon {...props}/>,
        name : "Local"
    },
    "op-add" : {
        category : "op-2",
        component : ({}) => <div></div>,
        config : {},
        logo : ({...props}) => <BracketsCurlyIcon {...props}/>,
        name : "Addition"
    }
}

export const NODEOPTIONS : Record<string, NodeOptionT[]> = Object.entries(MASTER_REGISTRY).map(([key, value]) => {
    return {
        name : value.name,
        logo : value.logo,
        index : key,
        category : value.category
    }
}).reduce((acc : Record<string, NodeOptionT[]>, reducer) => {
    
    const {category, ...rest} = reducer;
    if(!acc[reducer.category]) acc[reducer.category] = [];

    acc[reducer.category].push(rest);
    return acc
}, {} as Record<string, NodeOptionT[]>)

export const NODETYPES : Record<string, React.ComponentType<NodeProps>> = Object.entries(MASTER_REGISTRY).map(([key,value]) => {
    return {
        component : value.component,
        key
    }
}).reduce((acc : Record<string, React.ComponentType<NodeProps>>, reducer) => {
    if(!acc[reducer.key]) acc[reducer.key] = ({...props})=><div {...props}>opps sometime not right!</div>;
    acc[reducer.key] = reducer.component;
    return acc
}, {} as Record<string, React.ComponentType<NodeProps>>)

