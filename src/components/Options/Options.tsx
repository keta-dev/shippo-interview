import { FC, HTMLProps, useMemo, useState } from "react";
import "./Options.css";

type OptionProps = HTMLProps<HTMLButtonElement> & {
  label: string;
  value: string;
  active?: boolean;
};

const Option: FC<OptionProps> = ({className, label, active, ...props}) => {
  return <button className={`option-btn ${!!active && "option-btn-active"} ${className}`} {...props as object}>
    <span>O</span> {label}
  </button>;
};

type OptionsProps = HTMLProps<HTMLDivElement> & {
  options: {label: string, value: string, active?: boolean}[];
};

const Options: FC<OptionsProps> = ({options, ...props}) => {
  const initialState = useMemo(() => {
    const data: Record<string, boolean> = {};
    options.forEach((item) => {
      data[item.label] = !!item.active
    });

    return data;
  }, [options]);
  
  const [optionState, setOptionState] = useState<Record<string, boolean>>(initialState);

  return (
    <div className="option-container">
      {options.map((option, index) => (
        <Option
          label={option.label}
          value={option.value}
          active={optionState[option.label]}
          key={index}
          {...props as object}
          onClick={() => {
            setOptionState(prev => ({...prev, [option.label]: !optionState[option.label]}));
          }}
        />
      ))}
    </div>
  );
};

export default Options;