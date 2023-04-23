import React from 'react';
import { Container, Text, IconContainer } from './styles';
import { DateInputProps } from './interface';


export default function DateInput({ children, focused, type = 'background-grey', onPress }: DateInputProps) {
  return (
    <Container testID="date-input" onPress={onPress} focused={focused} type={type} disabled={!onPress}>
      <Text>{children}</Text>
      <IconContainer>z'
      </IconContainer>
    </Container>
  );
}
