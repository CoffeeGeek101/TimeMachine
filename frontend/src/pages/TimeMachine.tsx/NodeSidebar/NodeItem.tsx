import React, { type FC } from 'react'
import type { NodeOptionT } from './util'

interface NodeItemI {
    options : NodeOptionT
}

const NodeItem : FC<NodeItemI> = ({options}) => {
  return (
    <div
    id={options.index}
    data-list-id={options.index} 
    className='bg-violet-200/20 border-[0.5px] border-violet-300 flex flex-row items-center gap-2 w-full rounded-sm p-2'
    >
        <options.logo size={15} weight="duotone" color={'#5b4bc894'}/>
        <p className='text-[12px]'>{options.name}</p>
    </div>
  )
}

export default NodeItem