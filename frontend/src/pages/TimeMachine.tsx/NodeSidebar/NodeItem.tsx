import React, { useRef, type FC } from 'react'
import type { NodeOptionT } from './util'
import { updateDragState } from '../DragandDropContext';
import { useSetAtom } from 'jotai';

interface NodeItemI {
    options : NodeOptionT,
    onDragHandler : (e:any) => void 
}

const NodeItem : FC<NodeItemI> = ({options, onDragHandler}) => {

  const setDraggingNode = useSetAtom(updateDragState)

  function onPointerDown(e: React.PointerEvent) {
    const ele = e.currentTarget.getBoundingClientRect();
    const offset = {
      x : e.clientX - ele.left,
      y : e.clientY - ele.top
    }
    const NodeData = {nodeType : options.name, label : options.index, offset : offset}
    setDraggingNode(NodeData);
    onDragHandler(e);
  }

  return (
    <div
    id={options.index}
    data-list-id={options.index} 
    className='bg-violet-200/20 border-[0.5px] border-violet-300 flex flex-row items-center gap-2 w-full rounded-sm p-2'
    onPointerDown={(e)=>onPointerDown(e)}
    >
        <options.logo size={15} weight="duotone" color={'#5b4bc894'}/>
        <p className='text-[12px]'>{options.name}</p>
    </div>
  )
}

export default NodeItem