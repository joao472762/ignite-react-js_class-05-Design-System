import {CalendarButtonProps, CalendarButton}  from '@ignite-ui-class/react'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Surface/CalendarButton',
    component: CalendarButton,
    args:{
        children: '20',
        isAvaliable: false
    },
    argTypes: {
        isAvaliable: {
            type: 'boolean',
        }
    }
} as Meta<CalendarButtonProps>

export const Default = {
 
} satisfies StoryObj<CalendarButtonProps>

export const Avaliable = {
    args: {
        isAvaliable: true,
    }
} as StoryObj<CalendarButtonProps>