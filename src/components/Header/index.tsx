import { Text, Image } from "react-native";
import { Container, ImageComponent, HeaderContainer, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
      <HeaderContainer>
      <ImageComponent source={require('../../../assets/Logo.png')} />
      <Image source={require('../../../assets/Avatar.png')} />
      </HeaderContainer>
      </Content>
    
    </Container>
  );
}
