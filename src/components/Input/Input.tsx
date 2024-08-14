import { FC, HTMLProps } from "react";
import "./Input.css";

type Props = HTMLProps<HTMLInputElement>;

const Input: FC<Props> = ({className, type = "text", ...props}) => {
  return <input type={type} className={`${className}`} {...props} />
};

export default Input;