import ContactForm from './ContactForm';
export default ContactForm;
export type { ContactFormTypes, FormStatusTypes } from './ContactForm.types';

export const ContactForm_Query = `
  _type == "ContactForm" => {
    paragraph,
    topics
  },
`;
