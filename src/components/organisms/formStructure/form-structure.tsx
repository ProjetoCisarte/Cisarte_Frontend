import { ContainerForms } from "./form-structure-style";
import { ReactNode } from "react";
import { useRef } from "react";
import emailjs from 'emailjs-com';

interface FormStructureProps {
  title: string;
  children: ReactNode;
}

const FormStructure: React.FC<FormStructureProps> = ({ title, children }) => {

    const ref = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (ref.current) {
        const result = await emailjs.sendForm(
          'service_da_cisarte',
          'template_da_cisarte',
          ref.current,
          'user_da_cisarte'
        );
        
        console.log(result.text);
      }
    } catch (error) {
      console.error((error as { text?: string })?.text || 'Erro ao enviar a mensagem.');
    }
  };

  return (
    <div>
      <ContainerForms>
        <h2>{title}</h2>
        <form ref={ref} onSubmit={handleSubmit}>
            {children}
        </form>
      </ContainerForms>
    </div>
  );
};

export default FormStructure;
