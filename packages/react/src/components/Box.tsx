import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Box = styled('div',{
    borderRadius: '$sm',
    border: '1px solid $gray600',
    
    width: '100%',
    padding: '$6',
    backgroundColor: '$gray800',
})

export interface BoxProps extends ComponentProps<typeof Box>{
    as: ElementType
}