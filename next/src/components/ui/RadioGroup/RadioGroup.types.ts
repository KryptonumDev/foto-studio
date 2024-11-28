import { FieldErrors } from 'react-hook-form';

export type RadioGroupTypes = {
  label: string;
  errors: FieldErrors;
  options: string[];
  register: {
    name: string;
  };
} & React.InputHTMLAttributes<HTMLInputElement>;
