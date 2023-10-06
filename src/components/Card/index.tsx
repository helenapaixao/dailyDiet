import React from "react";
import { Image } from "react-native";
import { Container, TitlePercent, TextContent, ContainerImage } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Card = () => {
  const navigation = useNavigation();

  interface StatisticsScreenParams {
    headerTitle: string;
    headheaderSubTitle: string;
  }
  const handleCardPress = ({
    headerTitle,
    headheaderSubTitle,
  }: StatisticsScreenParams) => {
    navigation.navigate("Statistics", {
      headerTitle: "90,86% ",
      headerSubTitle: "das refeições dentro da dieta",
    });
  };

  return (
    <Container onPress={handleCardPress}>
      <ContainerImage>
        <Image source={require("../../../assets/icons/Open.png")} />
      </ContainerImage>
      <TitlePercent>90,86%</TitlePercent>
      <TextContent>das refeições dentro da dieta</TextContent>
    </Container>
  );
};
