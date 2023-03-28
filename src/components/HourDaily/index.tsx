import React from "react";
import { Container,HourContainer,HourText, Line, ContentText } from "./styles";

export const HourDaily = () => {
  return (
    <Container>
      <HourContainer>
        <HourText>08:00</HourText>
        <Line/>
        <ContentText>X-tudo</ContentText>
      </HourContainer>
    </Container>
  );
};
