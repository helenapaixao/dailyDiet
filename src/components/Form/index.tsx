import React, { useState } from "react";
import {  View } from "react-native";
import { Input } from "@components/Input";
import {
  ButtonContainer,
  Container,
  Row,
  TextDiet,
} from "./styles";
import { Button } from "@components/Button";
import { ButtonDiet } from "@components/Button/ButtonDiet";
import FeedBack from "@components/FeedBack";

export default function Form() {
  const [selectedOption, setSelectedOption] = useState<"yes" | "no" | null>(
    null
  );
  const [showFeedback, setShowFeedback] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSelectOption = (option: "yes" | "no") => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    setShowFeedback(true);
  };

  return (
    <>
      {!showFeedback ? (
        <Container>
          <Input
            value={name}
            onChange={setName}
            label="Nome"
          />
          <Input
            value={description}
            isMultiline
            onChange={setDescription} 
            label={"Descrição"} 
            />

          <Row style={{ justifyContent: "space-between", marginBottom: 16 }}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <Input
              label="Data"
                value={date}
                onChange={setDate}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Input
              label="Hora"
                value={time}
                onChange={setTime}
              />
            </View>
          </Row>

          <TextDiet>Está dentro da dieta?</TextDiet>
          <ButtonContainer>
            <ButtonDiet
              onPress={() => handleSelectOption("yes")}
              title="Sim"
              type="yes"
              selected={selectedOption === "yes"}
            />
            <ButtonDiet
              onPress={() => handleSelectOption("no")}
              title="Não"
              type="no"
              selected={selectedOption === "no"}
            />
          </ButtonContainer>
          <Button
            size="m"
            type="primary"
            title="Cadastrar refeição"
            onPress={handleSubmit}
          />
        </Container>
      ) : (
        <FeedBack
          feedbackMessage={
            selectedOption === "yes"
              ? "Você continua dentro da dieta. Muito bem!"
              : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
          }
          isPositive={selectedOption === "no"}
        />
      )}
    </>
  );
}
