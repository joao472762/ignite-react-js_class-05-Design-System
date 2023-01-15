import { styled ,keyframes} from "../../styles";
import * as Checkbox from '@radix-ui/react-checkbox';

export const CheckboxContainer = styled(Checkbox.Root, {
    all: 'unset',
    lineHeight: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',

    backgroundColor: '$gray900',
    width: '$6',
    height: '$6',
    borderRadius: '$xs',
    overflow: 'hidden',

    cursor: 'pointer',

    border: '2px solid  $gray900',

    '&[data-state="checked"]': {
        backgroundColor: '$ignite500'
    },

    '&:focus': {
        border: '2px solid  $ignite300'
    }
})

const slideIn = keyframes({
    from: {
        transform: 'translateY(-100%)'
    },
    to: {
        transform: 'translateY(0)'
    },
})


const slideOut= keyframes({
    from: {
        transform: 'translateY(0)'
    },
    to: {
        transform: 'translateY(-100%)'
    },
})
export const CheckboxIndicator = styled(Checkbox.Indicator,{


    height: '$4',
    color: '$white',
    width: '$4',

    '&[data-state="checked"]': {
        animation: `${slideIn} 200ms ease-out`
    },

    '&[data-state="unchecked"]': {
        animation: `${slideOut} 200ms ease-out`
    },
})