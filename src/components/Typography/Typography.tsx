import { FC, HTMLProps, createElement } from "react";
import "./Typography.css";

type Props = (HTMLProps<HTMLParagraphElement> & {
  variant?: "p";
  textSize?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
}) | (HTMLProps<HTMLHeadingElement> & {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "primary" | "secondary";
  textSize?: "small" | "medium" | "large";
});

const Typography: FC<Props> = ({className, color = "primary", textSize = "medium", variant = "p", ...props}) => {
  const element = createElement(
    variant as string,
    {className: `typo-${color} typo-${textSize} typo-${variant} ${className}`, ...props}
  );

  return element;
};

export default Typography;