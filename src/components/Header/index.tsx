import { Text, Image } from "react-native";
import { Container, ImageComponent, HeaderContainer } from "./styles";

export function Header() {
  return (
    <Container>
      <HeaderContainer>
      <ImageComponent source={require('../../../assets/Logo.png')} />
      <Image source={require('../../../assets/Avatar.png')} />
      </HeaderContainer>
    </Container>
  );
}
