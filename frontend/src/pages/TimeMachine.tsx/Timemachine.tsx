import { useMemo } from 'react';
import NodeSidebar from './NodeSidebar/NodeSidebar'
import PipelineGraph from './Graph/PipelineGraph'
import PipelineRunner from './PipelineRunner'
import { createStore, Provider } from 'jotai';
import { ReactFlowProvider } from '@xyflow/react';
import { createPortal } from 'react-dom';
import Overlay from './Graph/Overlay';

const Timemachine = () => {

    const SideBarstore = useMemo(()=> {
          const st = createStore();
          return st;
      },[]);

  return (
    <div className='w-full h-dvh flex items-start justify-between font-sg p-6 z-10'>
        <Provider store={SideBarstore}>
            <NodeSidebar/>
            <ReactFlowProvider>
              <PipelineGraph/>
            </ReactFlowProvider>
            {
              createPortal(<Overlay/>, document.body)
            }
        </Provider>
        <PipelineRunner/>
    </div>
  )
}

export default Timemachine