import React from "react";
import Form from "@components/Form";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Container, TitlePercent, TextContent } from "./styles";

export default function Statistics() {
  const route = useRoute();
  const params = route.params as { headerTitle: string, headerSubTitle: string } | undefined;
  const headerTitle = params?.headerTitle || "iii"; // Defina um título padrão se não houver parâmetro
  const headerSubTitle = params?.headerSubTitle || '';
  return (
    <Container>
      <TitlePercent>{headerTitle}</TitlePercent>
      <TextContent>
        {headerSubTitle}
      </TextContent>
    </Container>
  );
}
