import { CheckboxProps } from "./interfaces";
import "./styles.scss";

export const Checkbox = ({ text, ...rest }: CheckboxProps) => {
  return (
    <div className='checkbox-container'>
      <label className='container'>
        <input type='checkbox' {...rest} />
        <span className='checkmark'></span>
      </label>
      <p>{text}</p>
    </div>
  );
};
