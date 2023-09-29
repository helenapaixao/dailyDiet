import styled, { css } from 'styled-components/native'
import { ButtonProps } from '.'

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  flex-direction: row;
  height: 50px;
  border-radius: 6px;
  border-color: #eff0f0;
  border-width: 1px;
  width: 148px;
  padding: 0 12px;
  background-color: #eff0f0;
  margin-bottom: 10px;

  justify-content: center;
  display: flex;
  align-items: center;
  ${({ type, isPressed }) => {
    if (isPressed) {
      return css`
        border-color: ${type === 'no' ? '#BF3B44' : '#639339'};
        background-color: ${type === 'no' ? '#F4E6E7' : '#E5F0DB'};
      `
    } else {
      return css`
        background-color: #eff0f0;
      `
    }
  }};
`

export const Title = styled.Text<ButtonProps>`
  font-size: 14px;
  flex: 1;
  color: '#1B1D1E';
  font-family: 'Nunito_700Bold';
  text-align: center;
`

export const Status = styled.View<ButtonProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ type }) => (type === 'yes' ? '#639339' : '#BF3B44')};
  border-radius: 20px;
`
