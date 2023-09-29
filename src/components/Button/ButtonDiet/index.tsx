import { useState } from "react";
import { TouchableHighlightProps } from "react-native";
import { ButtonContainer, Title, Status } from "./styles";

export type ButtonProps = TouchableHighlightProps & {
  onPress: () => void;
  title: string;
  type: 'yes' | 'no';
  isPressed: boolean;
};

export function ButtonDiet({ title, type }: ButtonProps) {
    const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
    console.log('oi')
  };

  return (
    <ButtonContainer onPress={handlePress}   isPressed={isPressed} title={title} type={type} >
       <Status type={type} />
      <Title type={type}>{title}</Title>
    </ButtonContainer>
  );
}
