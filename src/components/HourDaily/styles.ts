import { View } from 'react-native'
import styled from 'styled-components/native'
import { HourDailyProps } from './index'

export const Container = styled.View`
  width: 327px;
  border-color: #dddedf;
  border-width: 1px;
  border-radius: 6px;
  margin-top: 10px;
`

export const HourContainer = styled.View`
  align-items: center;
  height: 49px;
  margin-left: 10px;
  flex-direction: row;
`

export const HourText = styled.Text`
  font-size: 12px;
  font-family: 'Nunito_700Bold';
  color: #1b1d1e;
`
export const ContentText = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 16px;
`

export const Line = styled.View`
  width: 1px;
  background-color: #b9bbbc;
  height: 14px;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`

export const Status = styled.View<HourDailyProps>`
  width: 14px;
  height: 14px;
  background-color: ${({ status }) =>
    status === 'WARNING' ? '#CBE4B4' : '#F3BABD'};
  border-radius: 20px;
  position: absolute;
  margin-left: 280px;
`
