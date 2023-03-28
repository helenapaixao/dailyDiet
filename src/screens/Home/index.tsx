import { Text } from "react-native";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Container, Content, TextTitle, ContainerButton, ViewDaily, TextDaily} from "./styles";
import { Button } from "../../components/Button";
import { Entypo } from '@expo/vector-icons';
import ScreenContainer from '../../components/ScreenContainer'
import { HourDaily } from "../../components/HourDaily";
export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Card />
      </Content>
      <TextTitle>Refeições</TextTitle>
      <ContainerButton>
      <Button title="Nova Refeição" onPress={() => {}}  size='m' type="primary" icon={
        <Entypo name="plus" size={18} color="white" />
      }/>

      </ContainerButton>    
      <ScreenContainer>
        <ViewDaily>
        <TextDaily>12.08.23</TextDaily>
        </ViewDaily>
     
        <HourDaily />
        <HourDaily />
        <HourDaily />
        <HourDaily />
        <HourDaily />

      </ScreenContainer>
    </Container>
  );
}
