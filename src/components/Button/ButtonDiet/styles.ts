import styled, { css } from 'styled-components/native'
import { ButtonProps } from '.'

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 148px;
  height: 50px;
  border-radius: 6px;
  border-width: 1px;

  ${({ type, isPressed }) => css`
    border-color: ${isPressed ? (type === 'no' ? '#BF3B44' : '#639339') : '#EFF0F0'};
    background-color: ${isPressed ? (type === 'no' ? '#F4E6E7' : '#E5F0DB') : '#EFF0F0'};
  `}
`;

export const Title = styled.Text<ButtonProps>`
  font-size: 14px;
  font-family: 'Nunito_700Bold';
  text-align: center;
  color: #1B1D1E;
`;

export const Status = styled.View<ButtonProps>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${({ type }) => (type === 'yes' ? '#639339' : '#BF3B44')};
`;
