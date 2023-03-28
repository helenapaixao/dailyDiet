import { TouchableHighlightProps } from "react-native";
import { ButtonContainer, Title, ContentIcon } from "./styles";

export type ButtonProps = TouchableHighlightProps & {
  onPress: () => void;
  title: string;
  icon?: React.ReactNode;
  size: 's'| 'm';
  type: 'primary' | 'secondary';
};

export function Button({ title, icon, size, type, onPress }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress} title={title} icon={icon} size={size} type={type}>
      {icon && <ContentIcon>{icon}</ContentIcon>}
      <Title type={type}>{title}</Title>
    </ButtonContainer>
  );
}
