import IntroHeader from './IntroHeader';
export default IntroHeader;
export type { IntroHeaderTypes } from './IntroHeader.types';

export const IntroHeader_Query = `
  _type == "IntroHeader" => {
    heading,
    paragraph
  },
`;
