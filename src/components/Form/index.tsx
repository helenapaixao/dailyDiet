import React, { useState } from "react";
import { Alert, View } from "react-native";
import {
  ButtonContainer,
  Container,
  Row,
  Label,
  Input,
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
    if (
      !name.trim() ||
      !description.trim() ||
      !date.trim() ||
      !time.trim() ||
      !selectedOption
    ) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    setShowFeedback(true);
  };

  return (
    <>
      {!showFeedback ? (
        <Container>
          <Label>Nome</Label>
          <Input
            placeholder="Digite o nome"
            value={name}
            onChangeText={setName}
          />
          <Label>Descrição</Label>
          <Input
            placeholder="Digite a descrição"
            value={description}
            multiline
            onChangeText={setDescription}
          />

          <Row style={{ justifyContent: "space-between", marginBottom: 16 }}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <Label>Data</Label>
              <Input
                placeholder="dd/mm/aaaa"
                value={date}
                onChangeText={setDate}
                style={{
                  padding: 10,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#D9D9D9",
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Label>Hora</Label>
              <Input
                placeholder="hh:mm"
                value={time}
                onChangeText={setTime}
                style={{
                  padding: 10,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#D9D9D9",
                }}
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
              : "Que pena! Você saiu da dieta, mas continue tentando!"
          }
          isPositive={selectedOption === "yes"}
        />
      )}
    </>
  );
}
