import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Container, Content, TextTitle } from "./styles";
import { Button } from "../../components/Button";

export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Card />
      </Content>
      <TextTitle>Refeições</TextTitle>
      <Button title="Nova Refeição" onPress={() => {}}  size='m' type="primary" />
    </Container>
  );
}
