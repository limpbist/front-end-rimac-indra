import { DividerProps } from "./interfaces";
import "./styles.scss";

export const Divider = ({ mode = "light" }: DividerProps) => {
  return <div className={`divider-container ${mode}`}></div>;
};
