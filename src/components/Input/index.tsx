import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Container, Label, TextInput } from "./styles";
import { format } from "date-fns"; 
import { ptBR } from "date-fns/locale";

export interface TextInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  isMultiline?: boolean;
  maxLength?: number;
  onChange?: (text: string) => void; 
  onBlur?: () => void;
  isDateTimePicker?: boolean; 
}

export function Input({
  label,
  placeholder,
  value,
  isMultiline,
  maxLength,
  onChange,
  onBlur,
  isDateTimePicker,
}: TextInputProps) {
  const [date, setDate] = useState<Date | undefined>(
    value && !isNaN(Date.parse(value)) ? new Date(value) : undefined
  );
  
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event: Event, selectedDate: Date | undefined) => {
    if (selectedDate !== undefined) {
      setShowPicker(false);
      setDate(selectedDate);
      const formattedDate = format(selectedDate, "dd/MM/yyyy", {locale: ptBR}); 
      onChange && onChange(formattedDate); 
    } else {
      setShowPicker(false)
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
          onChangeText={onChange} 
          onBlur={onBlur}
        />
      )}
    </Container>
  );
}
