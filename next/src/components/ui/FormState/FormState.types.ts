import type { FormStatusTypes } from '@/components/global/ContactForm';

export type FormStateTypes = {
  success: boolean | undefined;
  setStatus: React.Dispatch<React.SetStateAction<FormStatusTypes>>;
};
