import React from "react";

import { Container, Label, TextInput } from "./styles";

export interface TextInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  //editable?: boolean;
  isMultiline?: boolean;
  maxLength?: number;
  onChange?: () => void;
  onBlur?: () => void;
}

export function Input({
  label,
  placeholder,
  value,
  //editable,
  isMultiline,
  maxLength,
  onChange,
  onBlur,
}: TextInputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput
        placeholder={placeholder}
        value={value}
        //editable={editable}
        multiline={isMultiline}
        maxLength={maxLength ? maxLength : isMultiline ? 1000 : 70}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Container>
  );
}
