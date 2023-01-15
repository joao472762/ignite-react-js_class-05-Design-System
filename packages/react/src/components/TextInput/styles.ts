import { styled } from "../../styles";

export const TextInputContainer = styled('div', {
    display: 'flex',
    alignItems: 'baseline',
    padding: '$3 $4',
    borderRadius: '$sm',
    height: 46,
    width: '100%',
    background: '$gray900',
    boxSizing: 'border-box',
    border: '2px solid $gray900',

    '&:has(input:focus)':{
        borderColor: '$ignite500'
    },

    '&:has(input:disabled)':{
        opacity: 0.7,
        cursor: 'not-allowed'
    }

})

export const Prefix = styled('span', {
    lineHeight: '$base',
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray400',
  
})

export const Input  = styled('input',{
    all: 'unset',


    lineHeight: '$base',
    background: 'transparent',
    width: '100%',
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$white',

    '&:hover': {
        color: '$gray400'
    },
    '&:disabled': {
        cursor: 'not-allowed',
    }
   
    
})