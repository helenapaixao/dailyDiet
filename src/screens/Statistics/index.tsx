import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  Container,
  TitlePercent,
  TextContent,
  Content,
  Header,
  Title,
  ContainerFooter,
} from "./styles";
import { CardInformation } from "@components/CardInformation";
import { MiniCard } from "@components/MiniCard";

export default function Statistics() {
  const route = useRoute();
  const params = route.params as
    | { headerTitle: string; headerSubTitle: string }
    | undefined;
  const headerTitle = params?.headerTitle || "90,86%";
  const headerSubTitle = params?.headerSubTitle || "das refeições dentro da dieta";

  return (
    <Container>
      <Header>
        <TitlePercent>{headerTitle}</TitlePercent>
        <TextContent>{headerSubTitle}</TextContent>
      </Header>
      <Content>
        <Title>Estatísticas gerais</Title>
        <CardInformation
          title="22"
          textInformation="melhor sequência de pratos dentro da dieta"
        />
        <CardInformation title="109" textInformation="refeições registradas" />
        <ContainerFooter>
          <MiniCard
            title="99"
            textInformation="refeições dentro da dieta"
            type={"positive"}
          />
          <MiniCard
            title="10"
            textInformation="refeições fora da dieta"
            type={"negative"}
          />
        </ContainerFooter>
      </Content>
    </Container>
  );
}
