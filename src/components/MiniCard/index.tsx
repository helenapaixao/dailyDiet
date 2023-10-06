import React from "react";
import { Container, Title,TextInformation } from "./styles";

export interface CardInformationProps  {
  title: string;
  textInformation: string;
  type: 'positive' | 'negative';
}

export const MiniCard= ({title, textInformation, type}: CardInformationProps) => {
  return (
    <Container type={type}>
      <Title>{ title}</Title>
      <TextInformation>{textInformation }</TextInformation>
    </Container>
  );
};
