import styled from 'styled-components/native'
import { DateInputProps } from './interface'

import { View } from 'react-native'

export const Container = styled.Pressable<DateInputProps>`
  background: ${({ type }) => (type === 'background-grey' ? '#FFFF' : '#6D34')};
  padding: 15px 12px 15px 12px;
  //-radius: 2px;
  border-width: 1px;
  border-color: ${({ focused }) => (focused ? '#454' : '#D787')};
  min-height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`

export const Text = styled.Text`
  color: #4343;
`

export const IconContainer = styled(View)`
  margin-right: 4px;
`
