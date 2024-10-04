import { FieldErrors } from 'react-hook-form';

export type CheckboxTypes = {
  label: React.ReactNode;
  errors: FieldErrors;
  register: {
    name: string;
  };
} & React.InputHTMLAttributes<HTMLInputElement>;
