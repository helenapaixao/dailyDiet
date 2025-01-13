import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import IllustrationNegative from "../../../assets/Illustration_negative.png";
import IllustrationPositive from "../../../assets/Illustration_positive.png";

interface FeedBackProps {
  feedbackMessage: string;
  isPositive: boolean;
}

export default function FeedBack({ feedbackMessage, isPositive }: FeedBackProps) {
  return (
    <FeedbackContainer>
       <FeedbackMessage isPositive={isPositive}>
        {isPositive ? "Continue assim!" : "Que pena!"}
      </FeedbackMessage>
      <Text>{feedbackMessage}</Text>
      <FeedbackImage
        source={isPositive ? IllustrationPositive : IllustrationNegative}
        resizeMode="contain"
      />
     
      
      <GoBackButton onPress={() => console.log("Ir para página inicial")}>
        <GoBackText>Ir para a página inicial</GoBackText>
      </GoBackButton>
    </FeedbackContainer>
  );
}

const FeedbackContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #fff;
`;

const FeedbackImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
`;

const FeedbackMessage = styled.Text<{ isPositive: boolean }>`
  font-size: 24px;
  font-family: 'Nunito_700Bold';
  color: ${({ isPositive }) => (isPositive ? "#639339" : "#BF3B44")};
  margin-bottom: 16px;
`;

const GoBackButton = styled.TouchableOpacity`
  margin-top: 24px;
  padding: 12px 24px;
  border-radius: 6px;
  background-color: #333638;
`;

const GoBackText = styled.Text`
  font-size: 16px;
  font-family: 'Nunito_700Bold';
  color: #fff;
`;
