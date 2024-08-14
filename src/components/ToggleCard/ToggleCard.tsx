import { HTMLProps, FC } from "react";
import "./ToggleCard.css";
import Toggle from "../Toggle/Toggle";
import Typography from "../Typography/Typography";

type Props = HTMLProps<HTMLDivElement> & {
  headerText: string;
  checked?: boolean;
};

const ToggleCard: FC<Props> = ({className, checked, headerText, children, ...props}) => {
  return (
    <div className={`toggle-card ${className}`} {...props}>
      <div className="toggle-card-header">
        <Typography className="toggle-card-header-text">{headerText}</Typography>
        <Toggle variant="fill" checked={checked} />
      </div>
      {children}
    </div>
  );
};

export default ToggleCard;