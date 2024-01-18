import cntl from "cntl";

const classes = {
  inputContainer: cntl`
    flex items-center my-3 w-full
    `,
  inputClass: cntl`
        w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600
    `,
  labelClass: cntl`
        ms-2 text-sm font-medium  text-[#07142b]
    `
};

interface ICheckBoxProps {
  name?: string;
  label: string;
  value: string;
  onChange: () => void;
}

const CheckBox = ({ value, name, label, onChange }: ICheckBoxProps) => {
  return (
    <div className={classes.inputContainer}>
      <input
        id="default-checkbox"
        type="checkbox"
        value={value}
        className={classes.inputClass}
        name={name}
        onChange={onChange}
      />
      <label htmlFor="default-checkbox" className={classes.labelClass}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
