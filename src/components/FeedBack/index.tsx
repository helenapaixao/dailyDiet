import React from 'react';
import { View, Text } from 'react-native';

interface FeedBackProps {
  route: {
    params: {
      feedbackMessage: string;
      isPositive: boolean;
    };
  };
}

const FeedBack: React.FC<FeedBackProps> = ({ route }) => {
  const { feedbackMessage, isPositive } = route.params;

  return (
    <View>
      <Text>{feedbackMessage}</Text>
      {isPositive ? (
        <Text>Feedback Positivo</Text>
      ) : (
        <Text>Feedback Negativo</Text>
      )}
    </View>
  );
};

export default FeedBack;
