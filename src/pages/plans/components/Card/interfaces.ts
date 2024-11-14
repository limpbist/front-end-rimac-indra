import { ButtonHTMLAttributes } from 'react';

export interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: () => JSX.Element;
  title: string;
  description: string;
  selected: boolean;
}
