import CategoryChips from './CategoryChips';
export default CategoryChips;
export type { CategoryTypes } from './CategoryChips.types';

export const Category_Query = `
  _id,
  categoryName,
  "slug": slug.current
`;
