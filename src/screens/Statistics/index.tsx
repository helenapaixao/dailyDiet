import React from "react";
import Form from "@components/Form";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  Container,
  TitlePercent,
  TextContent,
  Content,
  Header,
} from "./styles";

export default function Statistics() {
  const route = useRoute();
  const params = route.params as
    | { headerTitle: string; headerSubTitle: string }
    | undefined;
  const headerTitle = params?.headerTitle || "iii"; // Defina um título padrão se não houver parâmetro
  const headerSubTitle = params?.headerSubTitle || "";
  return (
    <Container>
      <Header>
        <TitlePercent>{headerTitle}</TitlePercent>
        <TextContent>{headerSubTitle}</TextContent>
      </Header>
      <Content>
        <TitlePercent>Oi</TitlePercent>
      </Content>
    
    </Container>
  );
}
