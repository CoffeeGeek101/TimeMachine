// reatflow component

import { Background, ReactFlow, useEdgesState, useNodesState, useReactFlow, type Node } from '@xyflow/react'
import { useAtomValue, useSetAtom } from 'jotai'
import React, { useId } from 'react'
import { dragState, updateDragState } from './DragandDropContext'

const PipelineGraph = () => {

  const draggedNode = useAtomValue(dragState);

  const setDraggedNode = useSetAtom(updateDragState);
  const { screenToFlowPosition } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const getID = useId();

  const onPointerUp = (e : React.PointerEvent<HTMLDivElement>) => {
    console.log("wait is this event getting triggered ?")
    console.log(draggedNode, "yoo")
    if(!draggedNode) return;

    console.log('data', draggedNode);
    console.log('2. [Canvas] Raw Pointer Event:', { x: e.clientX, y: e.clientY });
    const flowPosition = screenToFlowPosition({x : e.clientX, y : e.clientY});
    console.log('3. [Canvas] Dropping Node at:', flowPosition);

    const newNode = {
      id: getID,
      type: draggedNode.nodeType, 
      position: flowPosition,
      data: { label: draggedNode.label },
    };

    setNodes((nds) => nds.concat(newNode));
    setDraggedNode(null);
  }


  return (
    <div className='flex-3 h-full'
    onPointerUp={(e)=>onPointerUp(e)}
    >
      <ReactFlow 
      nodes={nodes} 
      edges={edges} 
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView>
        <Background/>
      </ReactFlow>
    </div>
  )
}

export default PipelineGraph