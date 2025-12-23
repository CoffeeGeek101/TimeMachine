import { useEffect, useState } from "react"
import { operationMap, type operations } from "../types/operations"

type OperationHookT = {
    operation_names : AvailableOperations[],
}

type AvailableOperations = 'add' 

export const useOperation = ({operation_names} : OperationHookT) => {

    const [operations, setOperations] = useState<operations[]>([]);

    const getOperations = () => {
        let operationArr : operations[] = [];
        for(let i = 0; i < operation_names.length; i++){
            operationArr.push({name : operation_names[i], apply : operationMap[operation_names[i]]});
        };
        return operationArr;
    }

    useEffect(()=>{
        setOperations(getOperations());
    },[]);

    return { operations }

}