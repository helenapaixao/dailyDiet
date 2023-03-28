import React from "react";
import { Container,HourContainer,HourText, Line, ContentText ,Status } from "./styles";

export type HourDailyProps = {
  hour: string;
  content: string;
  status: 'APROVED' | 'WARNING'
}

export const HourDaily = ({hour, content, status}: HourDailyProps) => {
  return (
    <Container>
      <HourContainer>
        <HourText>{hour}</HourText>
        <Line/>
        <ContentText>{content}</ContentText>
        <Status status={status}/>
      </HourContainer>
    </Container>
  );
};
