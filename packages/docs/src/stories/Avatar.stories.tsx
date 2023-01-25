import {Avatar, AvatarProps, Text}  from '@ignite-ui-class/react'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Data Display/Avatar',
    component: Avatar,
    args: {
        src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    },
    argTypes: {
        src: {
           
            control: {
                type: 'text'
            }
        }
    }
} as Meta<AvatarProps>

export const Default = {} as StoryObj<AvatarProps>

export const WithFallBack = {
    args: {
        src: undefined
    }
} as  StoryObj<AvatarProps>