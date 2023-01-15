import { ComponentProps } from "react";
import { styled } from "../styles";

export const TextArea = styled('textarea', {
    width: '100%',
    background: '$gray900',
    boxSizing: 'border-box',
    minHeight: '$20',
    padding: '$3 $4',
    resize: 'vertical',
    borderRadius: '$sm',
    border: '0px 0px 0px 2px $gray900',

    lineHeight: '$base',
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$white',

    '&:focus': {
        borderColor: '$ignite500',
    },

    '&:hover': {
        color: '$gray400'
    },

    "&:disabled": {
        cursor: 'not-allowed',
        opacity: .7,
    }
})

export interface TextAreaProps extends ComponentProps<typeof TextArea>{}