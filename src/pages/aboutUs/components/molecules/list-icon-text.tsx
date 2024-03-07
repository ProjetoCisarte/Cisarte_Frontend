
interface ListProps {

    text:string,
    icon:string
    alt:string
}

export const ListIconText = ({text, icon, alt}:ListProps) =>{

    return(
        <ul>
            <li><img src={icon} alt={alt}/></li>
            <li>{text}</li>
        </ul>

    )
}