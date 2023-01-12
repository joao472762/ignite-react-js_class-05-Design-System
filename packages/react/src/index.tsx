import {colors} from '@ignite-ui/tokens'
import { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react'
import { styled } from './styles'





export const Button = styled('button', {
    background: '$ignite300',
    border: 0,
    borderRadius: '$sm',

    
    fontFamily: '$default',
    color: 'White',
    fontWeight: 'bold',


    width: '100%',

    variants: {
        size: {
            small: {
                fontSize: 'small',
                padding: '$2 $4',
            },

            big: {
                fontSize: '$lg',
                padding: '$2 $4',
            }
        }
    },

    defaultVariants: {
        size: 'small'
    }

})

export type ButtonProps = ComponentProps<typeof Button>

