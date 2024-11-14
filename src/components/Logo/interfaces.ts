type Color = "default" | "white" | "black";
type Variant = "vertical" | "horizontal";

export interface LogoProps {
  color?: Color;
  variant?: Variant;
}
