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
`;

export const Title = styled.Text<ButtonProps>`
  font-size: 14px;
  flex: 1;
  color: ${({ type }) =>
    type === "primary"
      ? "#FFFF"
      : type === "secondary"
      ? "#333638"
      : "#333638"};
  font-family: "Nunito_700Bold";;
  text-align: center;

`;

export const ContentIcon = styled.View`
  height: 18px;
  text-align: center;
`;
