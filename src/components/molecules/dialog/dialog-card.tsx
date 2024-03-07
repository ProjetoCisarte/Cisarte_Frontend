import { useState } from "react";
import { DialogArticle, DialogButton, DialogContent, DialogDetails,  DialogImage, DialogPicture, DialogSummary} from "./dialog-style";

interface DialogCardProps {
  title: string;
  content: string;
  imgSrc: string;
  imgAlt: string;
}

export const DialogCard = ({ title, imgAlt, imgSrc, content}: DialogCardProps) => {
  
  const [visible, setVisible] = useState<boolean>(false)
  


  return (
    <DialogArticle>
      <DialogPicture visible={visible}>
        <DialogImage src={imgSrc} alt={imgAlt} visible={visible} />
      </DialogPicture>
      <DialogDetails visible={visible}>
        <DialogSummary onClick={() => setVisible(!visible)}>
          {title}
          <DialogButton visible={visible} role="exibir conteúdo">
            <img src="/assets/icons/seta.svg" alt="Ícone de seta para baixo" width={20} height={20}/>
          </DialogButton>
        </DialogSummary>
        <DialogContent visible={visible}>
          {content}
        </DialogContent>
      </DialogDetails>
    </DialogArticle>
  );
};
