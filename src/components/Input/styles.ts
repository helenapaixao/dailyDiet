import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  border-radius: 6px;
  margin-top: 30px;
`

export const Label = styled.Text`
  color: #333638;
  font-size: 14px;
  font-family: 'Nunito_700Bold';
  margin-bottom: 2px;
`

export const TextInput = styled.TextInput<{
  multiline?: boolean
}>`
  padding: ${({ multiline }) =>
    multiline ? '5px 10px 80px 10px' : '15px 12px 15px 12px'};
  height: ${({ multiline }) => (multiline ? '408px' : '120px')};
  border-color: #dddedf;
  border-width: 1px;
  border-radius: 6px;
  height: 48px;
  display: flex;
`
