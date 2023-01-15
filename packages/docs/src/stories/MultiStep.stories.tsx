import {Box, MultiStep, MultiStepProps, Text}  from '@ignite-ui/react'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Form/MultiStep',
    component: MultiStep,
    args: {
        size: 4,
        currentStep: 1
    },
    decorators: [
        (Story) => (
            <Box>
                {Story()}
            </Box>
        )
    ]

} as Meta<MultiStepProps>

export const Default = {} as StoryObj<MultiStepProps>

export const Full = {
    args: {
        currentStep: 4
    }
} as StoryObj<MultiStepProps>

