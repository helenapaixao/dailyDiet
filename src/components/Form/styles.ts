import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fff;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #333638;
  font-family: "Nunito_700Bold";
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  height: 50px;
  border-width: 1px;
  border-color: #d9d9d9; 
  border-radius: 6px;
  padding: 10px;
  font-size: 16px;
  color: #333;
  margin-bottom: 16px;
  background-color: #fff;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const TextDiet = styled.Text`
  font-size: 16px;
  color: #333638;
  font-family: "Nunito_700Bold";
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 32px;
`;
