import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"; // Importe o DateTimePicker
import { Container, Label, TextInput } from "./styles";
import { format } from "date-fns"; // Importe a função de formatação de datas

export interface TextInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  isMultiline?: boolean;
  maxLength?: number;
  onChange?: (text: string) => void; // Modifique o tipo de retorno da função onChange
  onBlur?: () => void;
  isDateTimePicker?: boolean; // Nova propriedade para indicar que é um campo de data e hora
}

export function Input({
  label,
  placeholder,
  value,
  isMultiline,
  maxLength,
  onChange,
  onBlur,
  isDateTimePicker, // Nova propriedade para indicar que é um campo de data e hora
}: TextInputProps) {
  const [date, setDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event: Event, selectedDate: Date | undefined) => {
    if (selectedDate !== undefined) {
      setShowPicker(false);
      setDate(selectedDate);
      const formattedDate = format(selectedDate, "dd/MM/yyyy"); // Formate a data para "dd/MM/yyyy"
      onChange && onChange(formattedDate); // Chame a função onChange com a nova data formatada
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <Text>
          {date ? <Text>{format(date, "dd/MM/yyyy")}</Text> : placeholder}
        </Text>
      </TouchableOpacity>
      {showPicker && isDateTimePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()} 
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
          
        />
      )}
      {!isDateTimePicker && (
        <TextInput
          placeholder={placeholder}
          value={value}
          multiline={isMultiline}
          maxLength={maxLength ? maxLength : isMultiline ? 1000 : 70}
          onChangeText={onChange} // Use onChangeText para campos de texto normais
          onBlur={onBlur}
        />
      )}
    </Container>
  );
}
