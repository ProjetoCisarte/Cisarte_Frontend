import { CardConteiner, ButtonCard } from './card';

interface CardsProps {
  icon: string;
  title: string;
  text: string;
  alt: string;
  showButton?: boolean; 
}

export const CardKnow = ({ icon, title, text, alt, showButton = true }: CardsProps) => {
  return (
    <>
      <CardConteiner>
        {icon && <img src={icon} alt={alt} />}
        <h4>{title}</h4>
        <p>{text}</p>
        {showButton && <ButtonCard>Saiba Mais</ButtonCard>}
      </CardConteiner>
    </>
  );
};
