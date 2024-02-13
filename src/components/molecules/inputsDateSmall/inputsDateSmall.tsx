import { InputSmallContainer } from "./inputsDateSmall.styles"

interface InputDateSmallProps {
    NameLabel: string;
  }

const InputsDateSmall = ({NameLabel}: InputDateSmallProps) => {
    return(
        <div>
            <InputSmallContainer>
                <label>{NameLabel}</label>
                <input type="date" />
            </InputSmallContainer>
        </div>
    )
}

export default InputsDateSmall