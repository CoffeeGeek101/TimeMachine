import { type FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../../utils/dynamicTailwind'
import { NodeOptions, type sideBarNodesT } from './util'
import { useAtomValue } from 'jotai'
import { activeNodeSectionId_, isSidebarOpen_ } from './context'
import BaseList from '../../../component/BaseList'
import NodeItem from './NodeItem'

interface NodeSidebarItemI {
    options : sideBarNodesT,
}

const NodeSidebarItem : FC<NodeSidebarItemI> = ({options}) => {

    const isSidebarOpen = useAtomValue(isSidebarOpen_);
    const activeNodeSection = useAtomValue(activeNodeSectionId_);

    const handleDrag = (e : any) => {
        console.log(e);
    }
    
  return (
        <>
        {
        ((activeNodeSection.length === 1 && activeNodeSection[0] === options.index) || activeNodeSection.length === 0) ? 
        <div className='flex flex-col items-start justify-start gap-4'>
            <motion.div 
            id={options.index}
            layout 
            data-list-id={options.index} 
            className={cn(
                "bg-violet-200/20 border-[0.5px] border-violet-300 p-2 rounded-md overflow-hidden cursor-pointer", // Added overflow-hidden
                isSidebarOpen && 'bg-violet-200/20 p-3 rounded-md w-full gap-2' // Changed to rounded-md for smoother look
            )}
            transition={{ layout: { duration: 0.3, type: "spring", bounce: 0, stiffness: 300, damping: 30 } }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: isSidebarOpen ? 'flex-start' : 'center' }}
            >

                <motion.div layout className="shrink-0"> 
                    <options.logo 
                        size={20} 
                        weight="duotone" 
                        color={'#5b4bc894'} // Animate color if needed
                    />
                </motion.div>
                <AnimatePresence mode='popLayout'>
                    {isSidebarOpen && 
                        <motion.div 
                            initial={{ opacity: 0, x: -10, filter: 'blur(4px)' }} 
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                            className="flex flex-col items-start justify-start gap-1"
                        >
                            <p className="text-sm">{options.name}</p>
                            <p className="text-[11px] text-violet-400">{options.des}</p>
                        </motion.div>
                    }
                </AnimatePresence>
            </motion.div>
            <AnimatePresence>
            {
                (activeNodeSection[0] === options.index && options.type === "nested") && 
                    <motion.div 
                    initial={{ opacity: 0, y: -10, filter: 'blur(4px)' }} 
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    // exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className='ml-5 w-[89%]'>
                        <BaseList 
                        data={NodeOptions[options.index]} 
                        listItem={({...props}) => <NodeItem options={props.item} onDragHandler={props.dragHandler!}/>} //the actual draggables. 
                        onDragHandler={handleDrag}
                        className='gap-3'
                        />
                    </motion.div>
            }
            </AnimatePresence>
        </div>
        : null
        }
        </>
  )
}

export default NodeSidebarItem