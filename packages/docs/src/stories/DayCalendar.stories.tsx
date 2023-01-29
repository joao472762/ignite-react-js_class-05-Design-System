import {Meta, StoryObj} from '@storybook/react'
import {Box, DayCalendar, DayCalendarProps}  from '@ignite-ui-class/react'

export default {
    component: DayCalendar,
    title: 'Portal/DayCalendar',
    args: {
        date: new Date(),
        isAvaliable: true
    },
     

    decorators: [
        (State) => (
            <Box>
                {State()}
            </Box>
        )
    ]
} as Meta<DayCalendarProps>

export const Default = {} 