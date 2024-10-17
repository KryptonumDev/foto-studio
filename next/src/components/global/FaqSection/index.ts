import FaqSection from './FaqSection';
export default FaqSection;
export type { FaqSectionTypes } from './FaqSection.types';

export const FaqSection_Query = `
  _type == "FaqSection" => {
    heading,
    list[]->{
      _id,
      question,
      answer
    }
  },
`;
