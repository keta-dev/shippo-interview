import { FC, HTMLProps } from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg"
import Button from "../Button/Button";

type Props = HTMLProps<HTMLHeadingElement>;

const Header: FC<Props> = ({className, ...props}) => {
  return <header className={`header ${className}`} {...props}>
    <div className="content">
      <img src={Logo} alt="Shippo Logo" />
      <Button variant="outline">Proceed</Button>
    </div>
  </header>
};

export default Header;