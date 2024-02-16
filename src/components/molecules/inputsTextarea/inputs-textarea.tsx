import { InputsContainer } from "./inputs-textarea-styles";

interface InputsTexareaProps {
    NameLabel: string;
    Placeholder: string;
    Name: string;
  }

const InputsTextarea = ({NameLabel, Placeholder, Name}: InputsTexareaProps) => {
    return(
        <InputsContainer>
            <label>{NameLabel}</label>
            <textarea placeholder={Placeholder} name={Name} rows={7} />
        </InputsContainer>
    )
}

export default InputsTextarea