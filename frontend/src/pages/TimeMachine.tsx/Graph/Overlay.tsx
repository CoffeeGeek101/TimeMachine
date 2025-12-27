import { useAtomValue, useSetAtom } from 'jotai';
import { dragState, updateDragState } from '../DragandDropContext';
import { useEffect, useRef } from 'react';

const Overlay = () => {

    const draggedNode = useAtomValue(dragState);
    const setDragState = useSetAtom(updateDragState);
    const ghostRef = useRef<HTMLDivElement>(null);
    console.log(draggedNode);

    useEffect(()=>{
        if (!draggedNode) return;
        console.log(draggedNode, "from overlay catching the active dragging node");

        
            const onPointerMove = (e : PointerEvent) => {
                if(ghostRef.current){
                    const x = e.clientX - draggedNode.offset.x;
                    const y = e.clientY - draggedNode.offset.y;
                    ghostRef.current.style.transform = `translate(${x}px, ${y}px)`
                }
            }
            const handlePointerUp = () => {
            setDragState(null); 
            };

            window.addEventListener('pointermove', onPointerMove);
            window.addEventListener('pointerup', handlePointerUp);

            return ()=>{
                window.removeEventListener('pointermove', onPointerMove);
                window.removeEventListener('pointerup', handlePointerUp);
            }

    },[draggedNode, setDragState])

  return (
    <div className='w-dvw h-dvh fixed top-0 left-0 pointer-events-none'>
       {
       draggedNode &&
       <div ref={ghostRef} className="absolute top-0 left-0 will-change-transform">
            Hello world 
        </div>}
    </div>
  )
}

export default Overlay