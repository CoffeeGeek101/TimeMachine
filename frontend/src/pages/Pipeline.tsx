import { type FC } from 'react'
import { useStateMachine } from '../hooks/useStateMachine'
import { useOperation } from '../hooks/useOperation';
import { usePipeline } from '../hooks/usePipeline';

interface PipelineI {
    initialData : number[],
    initialGlobalData : number,
    pointer : number,
}

const Pipeline : FC<PipelineI> = ({initialData, initialGlobalData, pointer}) => {

    const {stateMachine} = useStateMachine({initialData, initialGlobal:initialGlobalData, pointer});
    const {operations} = useOperation({operation_names:['add']});

    // console.log(stateMachine, operations)

    const {snapshots, runPipeline} = usePipeline({stateMachine, operations});
    // we still need to run the pipeline
    console.log({snapshots});
  return (
    <div onClick={()=>runPipeline()}>Pipeline</div>
  )
}

export default Pipeline