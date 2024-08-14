import { FC, HTMLProps } from "react";
import "./Button.css";

type Props = HTMLProps<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
};

const Button: FC<Props> = ({variant = "primary", fullWidth, children, className, ...props}) => {
  return <button
    className={`btn btn-${variant} ${fullWidth && "btn-full-width"} ${className}`}
    {...props}
  >
      {children}
    </button>
};

export default Button;