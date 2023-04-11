import React from "react";

import { Container, Label, TextInput  } from "./styles";

export interface TextInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (string) => void;
  onBlur?: () => void;
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
}: TextInputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Container>
  );
}
