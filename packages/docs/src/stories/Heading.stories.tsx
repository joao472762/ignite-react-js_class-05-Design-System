import {Heading, HeadingProps}  from '@ignite-ui/react'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Typograph/Heading',
    component: Heading,
    args: {
        children: 'Title'
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<HeadingProps>

export const Default = {} as StoryObj<HeadingProps>

export const customTag = {
    args: {
        children: 'H1 heading',
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'por padrão o  heading sempre será `h2` mas podemos alterar isto com a propiedade `as`'
            }
        }
    }
} as  StoryObj<HeadingProps>