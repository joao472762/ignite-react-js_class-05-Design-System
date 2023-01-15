import {Box, TextArea, TextAreaProps,Text}  from '@ignite-ui/react'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Form/TextArea',
    component: TextArea,
    args: {
        placeholder: 'type the description'
    },
    decorators: [
        (Story) => (
            <Box css={{display: 'flex', flexDirection: 'column', gap:'$2'}}>
                <Text>Observation</Text>
                {Story()}
            </Box>
        )
    ]
} as Meta<TextAreaProps>

export const Default = {} as StoryObj<TextAreaProps>

export const Disabled = {
    args: {
        disabled: true
    }
} as StoryObj<TextAreaProps>
