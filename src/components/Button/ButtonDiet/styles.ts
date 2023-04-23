import styled from "styled-components/native";
import { ButtonProps } from ".";

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  flex-direction: row;
  height: 50px;
  border-radius: 6px;
  border-color: ${({ type }) =>
    type === "no" ? "#639339" : type === "yes" ? "#BF3B44" : "#BF3B44"};
  border: 1px;
  width: 148px;
  padding: 0 12px;
  background-color: ${({ type }) =>
    type === "no" ? "#F4E6E7" : type === "yes" ? "#E5F0DB" : "#EFF0F0"};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<ButtonProps>`
  font-size: 14px;
  flex: 1;
  color: "#1B1D1E";
  font-family: "Nunito_700Bold";
  text-align: center;
`;

export const Status = styled.View<ButtonProps>`
  width: 14px;
  height: 14px;
  background-color: ${({ type }) =>
    type === "yes" ? "#639339" : "#BF3B44"};
  border-radius: 50%;
`;
