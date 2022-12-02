import React from 'react'
import { Text } from '../components'

export default {
  title: 'Text',
  component: Text
}

export const text = (): JSX.Element => {
  return <Text text="text" />
}
