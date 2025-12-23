import NodeSidebar from './NodeSidebar'
import PipelineGraph from './PipelineGraph'
import PipelineRunner from './PipelineRunner'

const Timemachine = () => {
  return (
    <div className='w-full h-dvh flex items-start justify-between font-sg p-6'>
        <NodeSidebar/>
        <PipelineGraph/>
        <PipelineRunner/>
    </div>
  )
}

export default Timemachine