import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  justify-content: center;
  background-color: #e5f0db;
  width: 327px;
  border-radius: 8px;
  height: 102px;
  align-items: center;
  padding: 16px;
  position: relative;
`

export const TitlePercent = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: 32px;
  font-weight: bold;
  color: #1b1d1e;
  text-align: center;

`

export const TextContent = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #333638;
  font-family: 'Nunito_400Regular';
`

export const ContainerImage = styled.View`
   position: absolute; 
  top: 8px;
  right: 8px;
 align-self: flex-end;
`
