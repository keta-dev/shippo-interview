import { FC, HTMLProps } from "react";
import "./Card.css";
import Typography from "../Typography/Typography";

type Props = HTMLProps<HTMLDivElement> & {
  cardText?: string;
};

const Card: FC<Props> = ({className, cardText, children}) => {

  return <div className={`app-card ${className}`}>
    <Typography textSize="small">{cardText}</Typography>
    {children}
  </div>
};

export default Card;