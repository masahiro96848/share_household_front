import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { SubmitButton } from './SubmitButton'
import { LinkStatus } from '@/utils/constants'

export default {
  title: 'atoms/Button-submit',
  component: SubmitButton,
  argTypes: {
    buttonLabelStatus: {
      description: 'string',
    },
  },
} as ComponentMeta<typeof SubmitButton>

const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <SubmitButton {...args} />
)

export const Login = Template.bind({})
Login.args = {
  buttonLabelStatus: LinkStatus.LOGIN,
}

export const Register = Template.bind({})
Register.args = {
  buttonLabelStatus: LinkStatus.REGISTER,
}
