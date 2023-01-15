import {Text, TextProps}  from '@ignite-ui/react'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Typograph/Text',
    component: Text,
    args: {
        children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit itaque, ex minima quae tenetur dolorem vero, recusandae nulla quam dignissimos natus cumque doloribus. Libero ipsam velit perspiciatis pariatur dolorum?"
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<TextProps>

export const Default = {} as StoryObj<TextProps>

export const customTag = {
    args: {
        children: 'Storong text',
        as: 'strong'
    }
} as  StoryObj<TextProps>