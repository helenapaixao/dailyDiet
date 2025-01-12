import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #e5f0db;
  flex: 1;
`

export const Header = styled.View`
  background-color: #e5f0db;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const TitlePercent = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: 32px;
  color: #1b1d1e;
  font-weight: bold;
`

export const TextContent = styled.Text`
  font-size: 14px;
  color: #333638;
  font-family: 'Nunito_400Regular';
`

export const Content = styled.View`
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  padding: 16px;
  z-index: 1;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  height: 85%;
  justify-content: flex-start;
`

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
`

export const ContainerFooter = styled.View`
  flex-direction: row;
`
