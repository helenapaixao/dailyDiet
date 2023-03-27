import { TouchableHighlightProps, Image } from "react-native";
import { ButtonContainer, Title, ContentIcon } from "./styles";

export type ButtonProps = TouchableHighlightProps & {
  onPress: () => void;
  title: string;
  icon?: React.ReactNode;
  size: 's'| 'm';
};

export function Button({ title, icon, size, onPress }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress} title={title} icon={icon} size={size}>
      {icon && <ContentIcon>{icon}</ContentIcon>}
      <Title>{title}</Title>
    </ButtonContainer>
  );
}
