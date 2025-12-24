import type { MouseEvent, ReactNode } from "react";
import { cn } from "../utils/dynamicTailwind";

interface BaseListI {
    index : string,
    className ?: string,
    [key : string] : any;
}

interface BaseListProps<T> {
    data : T[];
    onClickHandler : (e : any) => void;
    listItem : (item : T) => ReactNode;
    className ?: string;
}

const BaseList = <T extends BaseListI>({data, onClickHandler, listItem, className } : BaseListProps<T>) => {

    const handleClick = (e : MouseEvent) => {
        const clicked_ele = ((e.target as Element).closest("[data-list-id]") as HTMLElement).id;
        onClickHandler(clicked_ele)
    }

  return (
    <div 
    className={cn("flex flex-col items-start gap-6", className)} //provide a className props to parent to add styles
    onClick={(e)=>handleClick(e)}>
        {
            data.map((options) => (
                listItem(options)
            ))   
        }
    </div>
  )
}

export default BaseList