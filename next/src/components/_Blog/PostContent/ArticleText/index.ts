import ArticleText from './ArticleText';
export default ArticleText;
export type { ArticleTextTypes } from './ArticleText.types';

export const ArticleText_Query = `
  _type == "ArticleText" => {
    content
  },
`;
