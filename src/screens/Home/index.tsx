import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { HourDaily } from "../../components/HourDaily";
import { Container, Content, TextTitle } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Card />
      </Content>
      <TextTitle>Refeições</TextTitle>
      <Button title="Nova Refeição" />
      <HourDaily/>

    </Container>
  );
}
