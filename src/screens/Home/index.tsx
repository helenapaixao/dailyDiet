import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Container, Content, TextTitle, ContainerButton} from "./styles";
import { Button } from "../../components/Button";
import { Entypo } from '@expo/vector-icons';

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
    </Container>
  );
}
