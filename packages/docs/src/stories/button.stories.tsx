import {Meta, StoryObj} from '@storybook/react'
import {Button, ButtonProps} from '@ignite-ui/react'

export default {
    component: Button,
    args: {
        title: 'button'
    }
} as Meta<ButtonProps>

export const Default = {
    args: {
        title: 'arroz'
    }
} as StoryObj
