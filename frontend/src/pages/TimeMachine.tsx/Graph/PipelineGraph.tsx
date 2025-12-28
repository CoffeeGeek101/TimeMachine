// reatflow component

import { Background, ReactFlow, useEdgesState, useNodesState, useReactFlow, type Node } from '@xyflow/react'
import { useAtomValue, useSetAtom } from 'jotai'
import React from 'react'
import { dragState, updateDragState } from '../DragandDropContext'
import {v4 as uuid4} from 'uuid';
import { createID } from './util';
import { NODETYPES } from '../MasterNodeRegistry';


const PipelineGraph = () => {

  const draggedNode = useAtomValue(dragState);

  const setDraggedNode = useSetAtom(updateDragState);
  const { screenToFlowPosition } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // const getID = useId();


  const onPointerUp = (e : React.PointerEvent<HTMLDivElement>) => {
    if(!draggedNode) return;

    const flowPosition = screenToFlowPosition({x : e.clientX - draggedNode.offset.x , y : e.clientY - draggedNode.offset.y});

    const newNode = {
      id: uuid4(),
      type: draggedNode.nodeType, 
      position: flowPosition,
      data: { label: createID(draggedNode.label) },
    };

    setNodes((nds) => nds.concat(newNode));
    setDraggedNode(null);
  }

  // console.log(NODETYPES)
  return (
    <div className='flex-3 h-full'
    onPointerUp={(e)=>onPointerUp(e)}
    >
      <ReactFlow 
      nodes={nodes} 
      edges={edges} 
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={NODETYPES}
      fitView>
        <Background style={{pointerEvents:'none'}}/>
      </ReactFlow>
    </div>
  )
}

export default PipelineGraph