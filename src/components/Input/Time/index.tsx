import React from 'react';
import { View, Text } from './styles';

interface TimeInputProps {
  children: React.ReactNode;
  focused: boolean;
  onPress: () => void;
}

export default function TimeInput({ children, onPress }: TimeInputProps) {
  return (
    <View testID="time-input" onPress={onPress}  disabled={!onPress}>
      <Text>{children}</Text>
    </View>
  );
}
