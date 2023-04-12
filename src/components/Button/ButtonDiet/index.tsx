import { TouchableHighlightProps } from "react-native";
import { ButtonContainer, Title, ContentIcon } from "./styles";

export type ButtonProps = TouchableHighlightProps & {
  onPress: () => void;
  title: string;
  icon?: React.ReactNode;
  type: 'yes' | 'no';
};

export function ButtonDiet({ title, icon,type, onPress }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress} title={title} icon={icon}  type={type}>
      {icon && <ContentIcon>{icon}</ContentIcon>}
      <Title type={type}>{title}</Title>
    </ButtonContainer>
  );
}
