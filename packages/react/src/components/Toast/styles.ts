import  * as Toast from '@radix-ui/react-toast';
import { keyframes, styled } from '../../styles';

export const ToastProvider = styled(Toast.Provider, {})

export const ToastViewport = styled(Toast.Viewport, {
    position: 'fixed',
    bottom: '$6',
    right: '$6',
    overflow: 'hidden',
    listStyle: 'none'
})

const slideIn  = keyframes({
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0%)' },
});

const slideOut = keyframes({
    '0%': { transform: 'translateX(0%)'},
    '100%': { transform: 'translateX(100%)'},
})

export const ToastRoot= styled(Toast.Root, {
    width: 360,
    backgroundColor: '$gray600',
    padding: '$3 $5',
    borderRadius: '$sm',
    display: 'flex',
    justifyContent: 'space-between',
    outline: 'none',

    
    '&[data-state=open]': {
        animation: `${slideIn} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,

    },
        
    '&[data-state=closed]': {
        animation: `${slideOut} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,

    }

})

export const ToastContent = styled('div', {
   
})



export const ToastTitle = styled(Toast.Title, {
    fontFamily: '$default',
    fontWeight: 'bold',
    color: '$white',
    fontSize: 'large'
})


export const ToastDescription = styled(Toast.Description, {
    fontFamily: '$default',
    marginTop: '$1',
    fontSize: '$sm',
    color: '$gray200'
})


export const ToastClose = styled(Toast.Close, {
    color: '$gray200'
})

