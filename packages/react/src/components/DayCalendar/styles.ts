import * as Tooltip from "@radix-ui/react-tooltip";
import { styled } from "../../styles";

export const TooltipTrigger = styled(Tooltip.Trigger)

export const ToolTipProvider = styled(Tooltip.Provider)


export const ToolTipRoot = styled(Tooltip.Root,)


export const ToolTipPortal = styled(Tooltip.Portal)


export const ToolTipContent = styled(Tooltip.Content, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: '$gray900',
    fontFamily: '$default',
    fontSize: '$md',
    color: '$gray100',
    borderRadius: 5,
    
    minWidth: 219,
    height: '$12',   
})

export const TooltipArrow = styled(Tooltip.Arrow, {
    height: 10,
    width: 10,
    fill: '$gray900',
})