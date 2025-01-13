import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateInput = ({ label, value, onChange }) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(value ? new Date(value) : new Date());

  const onChangeDate = (event, selectedDate) => {
    setShow(false); // Fecha o picker após a seleção
    if (selectedDate) {
      setDate(selectedDate);
      onChange && onChange(selectedDate.toISOString());
    }
  };

  return (
    <View>
      <Button title="Selecionar Data" onPress={() => setShow(true)} />
      {show && (
        <DateTimePicker
          value={date}
          mode="date" 
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};

export default DateInput;
