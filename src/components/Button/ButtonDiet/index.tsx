import { TouchableHighlightProps } from "react-native";
import { ButtonContainer, Title, Status } from "./styles";

export type ButtonProps = TouchableHighlightProps & {
  onPress: () => void;
  title: string;
  type: 'yes' | 'no';
};

export function ButtonDiet({ title, type, onPress }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress} title={title} type={type}>
       <Status type={type} />
      <Title type={type}>{title}</Title>
    </ButtonContainer>
  );
}
