import type { MouseEvent, ReactNode } from "react";
import { cn } from "../utils/dynamicTailwind";

interface BaseListI {
    index : string,
    className ?: string,
    [key : string] : any;
}

interface BaseListRowProps<T> {
    item : T,
    dragHandler ?: (e: any) => void
}

interface BaseListProps<T> {
    data : T[];
    onClickHandler ?: (e : any) => void;
    onDragHandler ?: (e : any) => void;
    listItem : ({item, dragHandler} : BaseListRowProps<T>) => ReactNode;
    className ?: string;
}

const BaseList = <T extends BaseListI>({data, onClickHandler, listItem, className, onDragHandler } : BaseListProps<T>) => {

    const handleClick = (e : MouseEvent) => {
            const clicked_ele = ((e.target as Element).closest("[data-list-id]") as HTMLElement).id;
            onClickHandler && onClickHandler(clicked_ele)
    }

  return (
    <div 
    className={cn("flex flex-col items-start gap-6", className)} //provide a className props to parent to add styles
    onClick={(e)=>handleClick(e)}
    onClickCapture={e => {
        if (onDragHandler) e.stopPropagation();  //we stop the event if draghandler is present!
      }}
    >
        {
            data.map((options) => (
                listItem({item : options, dragHandler: onDragHandler})
            ))   
        }
    </div>
  )
}

export default BaseList