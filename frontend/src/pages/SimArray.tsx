import React, { useState } from 'react'
import Shell from './Shell';

const SimArray = () => {

    const [myArray, setMyArray] = useState(()=> new Array(10).fill(0));
    const [globalAccumulator, setGlobalAccumulator] = useState(0);
    const [startPointer, setStartPointer] = useState(0);

    const handleStartPointer = (e : React.ChangeEvent<HTMLInputElement>) => {
        setStartPointer(Number(e.target.value));
    };

    const handleRight = () => {
        if(startPointer === myArray.length){
            return;
        }
        setStartPointer(prev => prev+1);
    }

  return (
    <div>
        <p>Array 1 : Execution = a sequence of immutable states</p>
        <div>
            {
                myArray.map((arrVal, idx) => (
                    <div data-index={idx}>
                        <Shell 
                        idx={idx}
                        value={arrVal} 
                        currentPointer={startPointer} 
                        isOverflowing={startPointer === myArray.length} 
                        masterUpdater={setMyArray}
                        globalUpdater={setGlobalAccumulator}
                        />
                    </div>
                )) 
            }
        </div>
        <input placeholder='set start pointer'  value={startPointer} onChange={(e)=>handleStartPointer(e)}/>
        <button onClick={()=>handleRight()}>to right</button>
        <span>Pointer position : {startPointer} Array data : {myArray[startPointer]} </span>
        <span>Global add {globalAccumulator}</span>
    </div>
  )
}

export default SimArray