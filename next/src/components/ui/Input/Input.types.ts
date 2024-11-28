import type { FieldErrors } from 'react-hook-form';

export type InputTypes = {
  label: string;
  register: {
    name: string;
  };
  errors: FieldErrors;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
