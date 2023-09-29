import { useState } from "react";
import { TouchableHighlightProps } from "react-native";
import { ButtonContainer, Title, Status } from "./styles";

export type ButtonProps = TouchableHighlightProps & {
  onPress?: () => void;
  title?: string;
  type?: "yes" | "no";
  isPressed?: boolean;
  selected?: boolean;
};

export function ButtonDiet({ title, type, selected }: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <ButtonContainer
      onPress={handlePress}
      isPressed={isPressed}
      title={title}
      type={type}
      selected={selected}
    >
      <Status type={type} />
      <Title type={type}>{title}</Title>
    </ButtonContainer>
  );
}
