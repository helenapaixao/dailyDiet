import { TouchableHighlightProps, Image } from "react-native";
import { ButtonContainer, Title, ContentIcon } from "./styles";

type ButtonProps = TouchableHighlightProps & {
  onPress: () => void;
  title: string;
  icon?: React.ReactNode;
};

export function Button({ title, icon, onPress }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress} title={title} icon={icon}>
      {icon && (
        <ContentIcon>
          <Image source={require("../../../assets/icons/Icon.png")} />
        </ContentIcon>
      )}

      <Title>{title}</Title>
    </ButtonContainer>
  );
}
