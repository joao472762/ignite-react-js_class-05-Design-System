import {Text, TextProps}  from '@ignite-ui-class/react'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Typograph/Text',
    component: Text,
    args: {
        children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit itaque, ex minima quae tenetur dolorem vero, recusandae nulla quam dignissimos natus cumque doloribus. Libero ipsam velit perspiciatis pariatur dolorum?",
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl'],
            control: {
                type: 'inline-radio'
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