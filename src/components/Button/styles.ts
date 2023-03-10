import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  padding: 16px 24px 16px 24px;
  width: 327px;
  background-color: #333638;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #ffff;
  font-family: "Nunito_700Bold";
`;
