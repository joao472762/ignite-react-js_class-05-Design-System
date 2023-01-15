import {Box, Checkbox, CheckboxProps, Text}  from '@ignite-ui/react'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    decorators: [
        (State) => (
            <Box css={{display: 'flex', columnGap:'$2', alignItems: 'center'}}>
                {State()}
                <Text>Accept user terms</Text>
            </Box>
        )
    ]

} as Meta<CheckboxProps>

export const Default = {} as StoryObj<CheckboxProps>