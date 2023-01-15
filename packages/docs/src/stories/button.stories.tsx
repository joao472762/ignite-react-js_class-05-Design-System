import {Meta, StoryObj} from '@storybook/react'
import {Button, ButtonProps} from '@ignite-ui/react'
import {ButtonHTMLAttributes} from 'react'
import {ArrowRight  } from 'phosphor-react'



export default {
    component: Button,
    title: 'Form/Button',
    args: {
        children: 'Send'
    },

} as Meta<ButtonProps>

export const Primary = {
} as StoryObj<ButtonProps>


export const Secundary = {
    args: {
        variant: 'secundary',
        children: 'Create New'
    }
    
} as StoryObj<ButtonProps>


export const Tertiary = {
    args: {
        variant: 'tertiary',
        children: 'Cancel'
    }
} as StoryObj<ButtonProps>


export const Small = {
    args: {
        size: 'sm'
    }
} as StoryObj<ButtonProps>

export const Disabled = {
    args: {
        disabled: true
    }
} as StoryObj<ButtonProps>

export const WithIcon = {
    args: {
        children: (
        <>Next <ArrowRight/></>
        )
    }
} as StoryObj<ButtonProps>






