import { ContainerForms } from "./form-structure-style";
import { ReactNode, useState } from "react";
import { useRef } from "react";
import emailjs from 'emailjs-com';

interface FormStructureProps {
  title: string;
  children: ReactNode;
  templateId: string;
}

const FormStructure: React.FC<FormStructureProps> = ({ title, children, templateId }) => {
  const [envioSucesso, setEnvioSucesso] = useState<boolean | null>(null);
  const ref = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (ref.current) {
        const result = await emailjs.sendForm(
          'service_e6b9vv9',
          templateId,
          ref.current,
          'KmmVtjSepIfeiXrEX'
        );

        console.log(result.text);
        setEnvioSucesso(true);
      }
    } catch (error) {
      console.error((error as { text?: string })?.text || 'Erro ao enviar a mensagem.');
      setEnvioSucesso(false);
    }
  };

  return (
    <div>
      <ContainerForms>
        {envioSucesso === null ? (
          <>
            <h2>{title}</h2>
            <form ref={ref} onSubmit={handleSubmit}>
              {children}
            </form>
          </>
        ) : envioSucesso ? (
          <p>Mensagem enviada com sucesso! ✅</p>
        ) : (
          <p>Oops... Erro ao enviar mensagem 🙁. Recarregue a página tente novamente!</p>
        )}
      </ContainerForms>
    </div>
  );
};

export default FormStructure;
