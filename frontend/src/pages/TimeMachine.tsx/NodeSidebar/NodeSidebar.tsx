// sidebar to select nodes

import { HourglassMediumIcon } from '@phosphor-icons/react';
import { cn } from '../../../utils/dynamicTailwind';
import BaseList from '../../../component/BaseList';
import { sidebarOptions } from './util';
import { motion } from 'framer-motion';
import { useSetAtom } from 'jotai';
import { useAtomValue } from 'jotai';
import { isSidebarOpen_, toggleSidebar_, updateActiveNodeSectionId_ } from './context';
import NodeSidebarItem from './NodeSidebarItem';

const NodeSidebar = () => {

    const isSidebarOpen = useAtomValue(isSidebarOpen_);
    const toggleSidebar = useSetAtom(toggleSidebar_);
    const updateActiveNodeSection = useSetAtom(updateActiveNodeSectionId_);

    const handleClick = (e : any) => {
        if(!isSidebarOpen){
            toggleSidebar(!isSidebarOpen);
        }
        updateActiveNodeSection(e);
    }

  return (
        <motion.div 
        layout
        transition={{duration:0.3}}
        className={cn("max-w-60 h-full overflow-hidden", isSidebarOpen ? 'w-60' : 'w-auto')}>
            <div 
            className={
                cn('h-full bg-violet-100/30 border-[0.5px] border-violet-300 rounded-xl flex flex-col gap-7 shadow', 
                isSidebarOpen ? 'p-6 items-start' : 'p-4 items-center'
                )}
            >
                <div className={cn('flex flex-row items-center justify-start gap-2')}>   
                    <motion.div layout 
                    onClick={()=>toggleSidebar(!isSidebarOpen)}
                    >
                        <HourglassMediumIcon size={25} weight="duotone" className='rotate-6 hover:rotate-0' color='#5b4bc894'/>
                    </motion.div>
                    {isSidebarOpen && 
                        <motion.p
                        className='font-light'
                        initial={{ opacity: 0, x: -40, filter: 'blur(4px)' }} 
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: -40, filter: 'blur(4px)'}}
                        transition={{duration: 0.1, delay: 0.1 }}
                        >
                            TimeMachine
                        </motion.p>
                    }
                </div>
                <hr className='h-[0.5px] w-full opacity-20'/>
                <BaseList 
                data={sidebarOptions} 
                onClickHandler={handleClick} 
                listItem={({...props})=> <NodeSidebarItem options={props.item}/>}
                />
                {/* <div>fav</div> */}
            </div>
        </motion.div>
  )
}

export default NodeSidebar