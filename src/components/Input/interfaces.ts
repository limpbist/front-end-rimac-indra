import { InputHTMLAttributes } from "react";

type Variant = "default" | "left" | "right";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: Variant;
  isValid: boolean;
}
