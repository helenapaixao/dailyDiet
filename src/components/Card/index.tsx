import React from "react";
import { Text, Image } from "react-native";
import { Container, TitlePercent, TextContent, ContainerImage } from "./styles";

export const Card = () => {
  return (
    <Container>
        <ContainerImage>
        <Image source={require("../../../assets/icons/Open.png")} />
        </ContainerImage>
      <TitlePercent>90,86%</TitlePercent>
      <TextContent>das refeições dentro da dieta</TextContent>
    </Container>
  );
};
