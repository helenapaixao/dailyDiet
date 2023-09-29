import { useState } from "react";
import { ButtonContainer, Container, TextDiet } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ButtonDiet } from "@components/Button/ButtonDiet";
import DateInput from "@components/Input/Date";

export default function Form() {
 const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | null>(null);

  const handleSelectOption = (option: 'yes' | 'no') => {
    setSelectedOption(option);
  };
  return (
    <Container>
      <Input label="Nome" />
      <Input label="Descrição" isMultiline={true} maxLength={200} />
      <TextDiet>Está dentro da dieta</TextDiet>
      <ButtonContainer>
        <ButtonDiet
            onPress={() => handleSelectOption('yes')}
          title="Sim"
          type="yes"
          isPressed
          selected={selectedOption === "yes"}
        />
        <ButtonDiet
         onPress={() => handleSelectOption('no')}
          title="Não"
          type="no"
          isPressed
          selected={selectedOption === "no"}
        />
      </ButtonContainer>
      <Button
        size="m"
        type="primary"
        title="Cadastrar refeição"
         onPress={() => {
           if (selectedOption === 'yes') {
            alert("yes")
          } else if (selectedOption === 'no') {
            // Foi selecionado "Não"
          } else {
            // Nenhuma opção selecionada
          }
        }}
      />
    </Container>
  );
}
