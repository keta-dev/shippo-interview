import { ChangeEvent, FC, HTMLProps, useEffect, useRef, useState } from "react";
import "./Toggle.css";

type Props = HTMLProps<HTMLInputElement> & {
  variant?: "outline" | "fill";
};

const Toggle: FC<Props> = ({className, variant = "outline", checked, ...props}) => {
  const inputRef = useRef<HTMLInputElement>();
  const [state, setState] = useState<boolean | undefined>(checked);

  const toggle = (ev: ChangeEvent<HTMLInputElement | HTMLDivElement>) => {
    if ("checked" in ev.target) {
      setState(ev.target.checked);
    } else {
      setState(prev => !prev);
    }
  }
  useEffect(() => {
    const input = inputRef.current
    input?.addEventListener("change", toggle as never);

    return () => {
      input?.removeEventListener("change", toggle as never);
    };
  });

  return (
    <div
      className={`toggle toggle-${variant} ${state ? "toggle-on" : "toggle-off"}`}
      onClick={toggle as never}
    >
      <input 
        ref={inputRef as never}
        checked={state}
        className={`toggle-input ${className}`}
        type="checkbox"
        {...props}
      />
    </div>
  );
};

export default Toggle;