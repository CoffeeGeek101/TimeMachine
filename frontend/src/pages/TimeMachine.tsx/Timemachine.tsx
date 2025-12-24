import { useMemo } from 'react';
import NodeSidebar from './NodeSidebar/NodeSidebar'
import PipelineGraph from './PipelineGraph'
import PipelineRunner from './PipelineRunner'
import { createStore, Provider } from 'jotai';

const Timemachine = () => {

    const SideBarstore = useMemo(()=> {
          const st = createStore();
          return st;
      },[]);

  return (
    <div className='w-full h-dvh flex items-start justify-between font-sg p-6'>
        <Provider store={SideBarstore}>
          <NodeSidebar/>
        </Provider>
        <PipelineGraph/>
        <PipelineRunner/>
    </div>
  )
}

export default Timemachine