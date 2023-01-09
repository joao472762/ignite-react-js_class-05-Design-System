import {colors} from '@ignite-ui/tokens'
import { styled } from './styles'

export function App(){
    const Button = styled('button', {
        background: '$ignite500',
        borderRadius: '$lg',
        color: 'White',
        padding: '$4'

    })
    return (
        <div >
            <h1 >hello myself </h1>
            <Button>click aqui</Button>
        </div>
    )
}