import {Meta, StoryObj} from '@storybook/react'
import { Button, Toast, ToastProps } from '@ignite-ui-class/react'

export default {
    title: 'Portal/Toast',
    component: Toast,
    args: {
        day: '30',
        description: 'Quarta-feira, 23 de Outubro às 16h',
        title: 'Agendamento realizado'
    },
} as Meta<ToastProps>

export const   Default  = {} 