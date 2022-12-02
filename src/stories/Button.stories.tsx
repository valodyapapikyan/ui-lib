import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Button as ButtonComp } from '../components'
import { TButtonPropTypes } from '../components/Button/types'
import { httpClient } from '../helpers/http-service'

export default {
  title: 'Button',
  component: ButtonComp
} as Meta

const Template: Story<TButtonPropTypes> = (args): JSX.Element => {
  return <ButtonComp {...args} />
}

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
  buttonText: 'Primary',
  onClick:  async () => {
    const data =  await httpClient.get({
      endpoint: 'https://restcountries.com/v3.1/all',
      payload: null

    })

    console.log('button clicked', data);
  },
  type: 'Primary'
}

export const ButtonWarning = Template.bind({})
ButtonWarning.args = {
  buttonText: 'Warning',
  onClick: () => console.log('buttonClicked'),
  type: 'Primary'
}
