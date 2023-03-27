import { TouchableHighlightProps } from "react-native";
import { ButtonContainer, Title, ContentIcon } from "./styles";

export type ButtonProps = TouchableHighlightProps & {
  onPress: () => void;
  title: string;
  icon?: React.ReactNode;
  size: 's'| 'm';
  type: 'primary' | 'secondary';
};

const BG_COLORS = {
  primary: '#E5F0DB',
  secondary: '#F4E6E7',
}

export function Button({ title, icon, size, type, onPress }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress} title={title} icon={icon} size={size} type={type}>
      {icon && <ContentIcon>{icon}</ContentIcon>}
      <Title>{title}</Title>
    </ButtonContainer>
  );
}
