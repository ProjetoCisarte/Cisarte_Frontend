import { InputsContainer } from "./inputs-text-large.styles"

interface InputsTextLargeProps {
    NameLabel: string;
    Placeholder: string;
  }

const InputsTextLarge = ({NameLabel, Placeholder}: InputsTextLargeProps) => {
    return(
        <div>
            <InputsContainer>
                <label>{NameLabel}</label>
                <input type="text" placeholder={Placeholder} />
            </InputsContainer>
        </div>
    )
}

export default InputsTextLarge