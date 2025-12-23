import React, { useEffect, type FC } from 'react'

interface ShellI {
    value : string | number | undefined;
    masterUpdater : React.Dispatch<React.SetStateAction<any[]>>;
    currentPointer : number;
    isOverflowing : boolean;
    globalUpdater : React.Dispatch<React.SetStateAction<number>>;
    idx : number;
}

const Shell : FC<ShellI> = ({currentPointer, idx, masterUpdater, value, isOverflowing, globalUpdater }) => {
  

    const handleShellUpdates = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(isOverflowing){
            return;
        }
        // (brute force) O(n^2)
        masterUpdater(prev => {
            let updated_array = [...prev];
            for(let i = 0; i < updated_array.length; i++){
                if(i === idx){
                    updated_array[i] = Number(e.target.value);
                }
            }
            return updated_array
        })
    }
    useEffect(()=>{
        if(idx === currentPointer){
            globalUpdater(prev => prev + Number(value));
        }
    },[currentPointer]);

    return (
    <input onChange={(e)=>handleShellUpdates(e)} value={value}/>
  )
}

export default Shell