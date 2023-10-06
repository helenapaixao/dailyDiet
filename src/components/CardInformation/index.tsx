import React from "react";
import { Container, Title,TextInformation } from "./styles";

interface CardInformationProps  {
  title: string;
  textInformation: string;
}

export const CardInformation = ({title, textInformation}: CardInformationProps) => {
  return (
    <Container>
      <Title>{ title}</Title>
      <TextInformation>{textInformation }</TextInformation>
    </Container>
  );
};
