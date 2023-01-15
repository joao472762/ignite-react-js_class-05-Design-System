import {Box, BoxProps, Text}  from '@ignite-ui/react'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Surface/Box',
    component: Box,
    args: {
        children: (
            <>
                <Text >box component</Text>
            </>
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<BoxProps>

export const Default = {} as StoryObj<BoxProps>