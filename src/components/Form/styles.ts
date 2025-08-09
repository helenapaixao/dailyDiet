import { Button } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
 background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
  margin-top: -16px;
  flex: 1;
  align-items: center;
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

export const ButtonWrapper = styled.View`
  flex: 1;
  margin-right: 8px; /* Espaço entre botões */
`;

export const ButtonWrapperLast = styled.View`
  flex: 1;
  margin-right: 0; /* Último sem margem */
`;