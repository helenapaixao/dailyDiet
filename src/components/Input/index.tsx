import React from "react";
import { TextInputProps } from "react-native";
import { Container, Label } from "./styles";

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({ label }: InputProps) {
  return (
    <>
    <Label/>
     <Container>

    </Container>
    </>
   
  );
}
