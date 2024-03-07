import { InputsContainer } from "./inputs-text-large.styles";
import InputMask from 'react-input-mask';

interface InputsTextLargeProps {
  NameLabel: string;
  Placeholder: string;
  Type: string;
  Name: string;
}

const InputsTextLarge = ({ NameLabel, Placeholder, Type, Name }: InputsTextLargeProps) => {
  return (
    <div>
      <InputsContainer>
        <label>{NameLabel}</label>
        {Type === 'number' ? (
          <InputMask mask="(99) 99999-9999" maskChar=" " alwaysShowMask={false}>
            {(inputProps: any) => <input {...inputProps} type="text" placeholder={Placeholder} name={Name} />}
          </InputMask>
        ) : (
          <input type={Type} placeholder={Placeholder} name={Name} required/>
        )}
      </InputsContainer>
    </div>
  );
};

export default InputsTextLarge;
