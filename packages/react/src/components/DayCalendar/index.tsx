import { format } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import { CalendarButton, CalendarButtonProps } from "../CalendarButton";
import { TooltipArrow, ToolTipContent, ToolTipPortal, ToolTipRoot } from "./styles";


export interface DayCalendarProps extends CalendarButtonProps{
    date: Date,
    isAvaliable: boolean
}
export function DayCalendar({date, isAvaliable}: DayCalendarProps) {
    const dateFormated = format(date,"d 'de' MMMM ", {
        locale: ptBR
    })

    return (
        <TooltipProvider>
            <ToolTipRoot delayDuration={200} >

                <TooltipTrigger asChild>
                    <CalendarButton  isAvaliable={isAvaliable}>{date.getDate()}</CalendarButton>
                </TooltipTrigger>

                <ToolTipPortal>
                    <ToolTipContent>
                        <span> 
                            {dateFormated} - 
                            {isAvaliable ? ' disponível': 'indisponível'}

                        </span>
                    <TooltipArrow />
                    </ToolTipContent>
                </ToolTipPortal>
                
            </ToolTipRoot>
        </TooltipProvider>
    )
}