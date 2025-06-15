import React from "react";
import { Label } from "@components/Label";
import { Container, TextInput } from "./styles";

export interface TextInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  isMultiline?: boolean;
  maxLength?: number;
  onChange?: (text: string) => void; 
  onBlur?: () => void;
}

export function Input({
  label,
  placeholder,
  value,
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
          multiline={isMultiline}
          maxLength={maxLength ? maxLength : isMultiline ? 1000 : 70}
          onChangeText={onChange} 
          onBlur={onBlur}
        />
    </Container>
  );
}
