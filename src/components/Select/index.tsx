import { SelectProps } from "./interfaces";
import "./styles.scss";

export const Select = ({
  variant = "default",
  isValid = true,
  options,
  ...rest
}: SelectProps) => {
  return (
    <div
      className={`select-container ${variant} ${
        isValid ? "default-border-color" : "error-border-color"
      }`}
    >
      <select
        className={`${isValid ? "default-color" : "error-color"}`}
        name='document'
        id='document'
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.text}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
