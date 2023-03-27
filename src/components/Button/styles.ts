import styled from "styled-components/native";
import { ButtonProps } from ".";

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  flex-direction: row;
  height: 50px;
  border-radius: 6px;
  border-color: ${({ type }) =>
    type === "primary"
      ? "#333638"
      : type === "secondary"
      ? "#333638"
      : "#333638"};
  border: 1px;
  width: ${({ size }) =>
    size === "s" ? "191px" : size === "m" ? "327px" : "100%"};
  padding: 0 12px;
  background-color: ${({ type }) =>
    type === "primary" ? "#333638" : type === "secondary" ? "#FFFF" : "#FFF"};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-size: 14px;
  flex: 1;
  color: #ffff;
  font-family: "Nunito_700Bold";
`;

export const ContentIcon = styled.View`
  height: 16px;
`;
