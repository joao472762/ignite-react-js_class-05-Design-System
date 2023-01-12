import {Meta, StoryObj} from '@storybook/react'
import {Button, ButtonProps} from '@ignite-ui/react'
import {ButtonHTMLAttributes} from 'react'



export default {
    component: Button,
    title: 'Components/Button',
    args: {
        children: 'Button'
    }
} as Meta<ButtonProps>

export const Primary = {
} as StoryObj<ButtonProps>

export const Big = {
    args: {
        size: 'big'
    }
} as StoryObj<ButtonProps>
