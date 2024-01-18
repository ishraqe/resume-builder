import cntl from "cntl";
import { SyntheticEvent, useMemo } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface IDatePickerInputProps {
  label?: string;
  name?: string;
  value?: string;
  onChange: (
    date: Date | null,
    event: SyntheticEvent<any, Event> | undefined
  ) => void;
  error?: string;
  placeholder?: string;
}

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
      rounded-md mb-[5px] w-full
    `,
  errorMessage: cntl`
      text-[12px] text-[#a51212]
    `
};

export const DatePickerInput = ({
  label,
  error,
  name,
  value,
  onChange,
  placeholder
}: IDatePickerInputProps) => {
  const dateValue = useMemo(() => {
    return value
      ? new Date(value)
          .toLocaleString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            timeZone: "UTC"
          })
          .split(",")[0]
      : "";
  }, [value]);

  return (
    <div className={classes.inputContainer}>
      {label ? <span className={classes.labelClass}>{label}</span> : null}
      <DatePicker
        value={dateValue}
        onChange={onChange}
        className={classes.inputClass}
        name={name}
        placeholderText={placeholder}
      />
      {error ? <span className={classes.errorMessage}>Error</span> : null}
    </div>
  );
};
