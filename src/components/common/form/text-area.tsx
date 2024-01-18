import { ChangeEvent } from "react";

interface ITextBoxProps {
  label?: string;
  placeholder?: string;
  name?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextBox = ({
  label,
  name,
  placeholder,
  value,
  onChange
}: ITextBoxProps) => {
  return (
    <div className="flex flex-col my-3 w-full">
      {label ? <span className="mb-[5px]">{label}</span> : null}
      <textarea
        className="resize rounded-md border w-full p-1"
        rows={5}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      ></textarea>
    </div>
  );
};
