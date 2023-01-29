import { ComponentProps } from "react";
import { styled } from "../styles";

export const CalendarButton = styled('button', {
    alignItems: 'center',
    justifyContent: 'center',
    
    width: 66,
    height: 58,

    fontFamily: '$default',
    color: '$white',
    border: 'none',
    borderRadius: '$sm',

    variants: {
        isAvaliable: {
            true: {
                backgroundColor: '$gray600',
            },
            false: {
                backgroundColor: '$gray800',
            }
        }
    },
    defaultVariants: {
        isAvaliable: false
    }
})

export interface CalendarButtonProps extends ComponentProps<typeof CalendarButton> {}