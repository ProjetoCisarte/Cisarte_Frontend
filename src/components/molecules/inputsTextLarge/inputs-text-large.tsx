import { InputsContainer } from "./inputs-text-large.styles"

interface InputsTextLargeProps {
    NameLabel: string;
    Placeholder: string;
    Type: string;
    Name: string;
  }

const InputsTextLarge = ({NameLabel, Placeholder, Type, Name}: InputsTextLargeProps) => {
    return(
        <div>
            <InputsContainer>
                <label>{NameLabel}</label>
                <input type={Type} placeholder={Placeholder} name={Name} />
            </InputsContainer>
        </div>
    )
}

export default InputsTextLarge