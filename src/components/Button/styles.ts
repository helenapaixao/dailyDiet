import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ButtonContainer = styled(TouchableOpacity)`
  width: 327px;
  height: 50px;
  border-radius: 6px;
  padding: 16px 24px 16px 24px;
  width: 100%;
  background-color: #333638;
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
