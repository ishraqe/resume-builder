import cntl from "cntl";
import { ChangeEvent } from "react";

const classes = {
  inputContainer: cntl`
    flex flex-col w-[100%] my-3
  `,
  labelClass: cntl`
    text-sm font-semibold text-[#07142b] mb-[5px] capitialise
  `,
  inputClass: cntl`
    text-regular text-[#07142b] border-[1px] 
    border-[#838fa0] p-[10px] pr-[30px] 
    rounded-md mb-[5px]
  `,
  errorMessage: cntl`
    text-[12px] text-[#a51212]
  `
};

interface IInputElementProps {
  label?: string;
  type: string;
  name?: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
}

const InputElement = ({
  label,
  type,
  placeholder,
  onChange,
  value,
  error,
  name
}: IInputElementProps) => {
  return (
    <div className={classes.inputContainer}>
      {label ? (
        <label htmlFor="inputEl" className={classes.labelClass}>
          {label}
        </label>
      ) : null}

      <input
        placeholder={placeholder}
        type={type}
        id="inputEl"
        onChange={onChange}
        value={value}
        className={classes.inputClass}
        name={name}
      />
      {error ? (
        <span className={classes.errorMessage}>
          Error message displayed here
        </span>
      ) : null}
    </div>
  );
};

export default InputElement;
