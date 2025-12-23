import type { MouseEvent } from "react";
import { cn } from "../utils/dynamicTailwind";
import { motion, AnimatePresence } from 'framer-motion'

interface BaseListI {
    index : string,
    [key : string] : any;
}

interface BaseListProps<T> {
    data : T[];
    onClickHandler : (e : any) => void;
    isSidebarOpen : boolean
}

const BaseList = <T extends BaseListI>({data, onClickHandler, isSidebarOpen} : BaseListProps<T>) => {

    const handleClick = (e : MouseEvent) => {
        // console.log(((e.target as Element).closest("[data-list-id]") as HTMLElement).id);
        const clicked_ele = ((e.target as Element).closest("[data-list-id]") as HTMLElement).id;
        onClickHandler(clicked_ele)
    }

  return (
    <div 
    className={cn("flex flex-col items-start gap-8", isSidebarOpen && 'gap-5')}
    onClick={(e)=>handleClick(e)}>
        {
            data.map((options) => (
                <motion.div 
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
            ))   
        }
    </div>
  )
}

export default BaseList