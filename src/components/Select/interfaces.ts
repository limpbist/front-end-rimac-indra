import { InputHTMLAttributes } from "react";

type Variant = "default" | "left" | "right";

interface Options {
  value: string;
  text: string | number;
}

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  variant?: Variant;
  isValid: boolean;
  options: Options[];
}
