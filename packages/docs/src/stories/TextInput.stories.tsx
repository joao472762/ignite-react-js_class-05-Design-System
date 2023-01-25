import {Meta,StoryObj} from '@storybook/react'
import {Box, Text, TextInput,TextInputProps} from '@ignite-ui-class/react'


export default {
    title: 'Form/Text Input',
    component: TextInput,
    decorators: [
        (Story) => (
            <Box as='label' css={{display: 'flex', flexDirection: 'column', gap:'$2'}}>
                <Text>email adress</Text>
                {Story()}
            </Box>
        )
    ]
} as Meta<TextInputProps>

export const Default = {
    args: {
        placeholder: 'useName'
    }
} as StoryObj<TextInputProps>

export const Disabled = {
    args: {
        disabled: true
    }
} as StoryObj<TextInputProps>
export const WithPrefix = {
    args: {
        prefix: 'com/'
    }
} as StoryObj<TextInputProps>

