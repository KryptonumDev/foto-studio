import HighlightedText from './HighlightedText';
export default HighlightedText;
export type { HighlightedTextTypes } from './HighlightedText.types';

export const HighlightedText_Query = `
  _type == "HighlightedText" => {
    content
  },
`;
