import styled from 'styled-components/native'
import type { CardInformationProps } from '.'

export const Container = styled.View<{ type: CardInformationProps['type'] }>`
  background-color: ${(props) =>
    props.type === 'positive' ? '#E5F0DB' : '#F4E6E7'};
  width: 150px;
  height: 100px;
  padding: 16px;
  border-radius: 8px;
  height: 107px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: 8px;
`

export const Title = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: 24px;
  color: #1b1d1e;
  margin-bottom: 8px;
`

export const TextInformation = styled.Text`
  font-size: 14px;
  color: #333638;
  font-family: 'Nunito_400Regular';
  text-align: center;
`

export const ContainerImage = styled.View`
  align-self: flex-end;
  margin-right: 12px;
`
