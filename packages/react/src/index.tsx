import {colors} from '@ignite-ui/tokens'
import { styled } from './styles'

export const ButtonComponent = styled('button', {
    background: '$black',
    borderRadius: '$lg',
    color: 'White',
    padding: '$4'

})

export interface ButtonProps {
    title: string
}
export function Button({title}:ButtonProps){
    return (
        <ButtonComponent>{title} botão </ButtonComponent>
    )
}

