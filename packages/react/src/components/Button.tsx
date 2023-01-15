import { ComponentProps } from "react"
import { styled } from "../styles"

export const Button = styled('button', {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    columnGap: '$2',

    textAlign: 'center',
    padding: '0 $4',
    borderRadius: '$sm',
    width: '100%',
    minWidth: 120,

    cursor: 'pointer',
   
    
    fontSize: '$sm',
    fontFamily: '$default',
    fontWeight: '$medium',
    lineHeight: '$short',

    'svg': {
        width: '$4',
        height: '$4'
    },

    '&:disabled': {
        cursor: 'not-allowed'
    },
    variants: {
        variant: {
            primary: {
                backgroundColor: '$ignite500',
                color: '$white',

                '&:not(:disabled):hover':{
                    backgroundColor: '$ignite300'
                },

                '&:disabled': {
                    backgroundColor: '$gray200'
                },
            },
            secundary: {
                color: '$ignite300',
                border: '2px solid $ignite500',

                '&:not(:disabled):hover':{
                    backgroundColor: '$ignite500',
                    color: '$white',
                },

                '&:disabled': {
                    backgroundColor: '$gray200',
                    borderColor: '$gray200'
                },
            },
            tertiary: {
                color: '$gray100',

                '&:not(:disabled):hover':{
                    backgroundColor: '$white'
                },

                '&:disabled': {
                    backgroundColor: '$gray600'
                },
            }
        },
        size: {
            sm: {
                height: 38
            },
            md: {
                height: 46
            }
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }


})

export type ButtonProps = ComponentProps<typeof Button>