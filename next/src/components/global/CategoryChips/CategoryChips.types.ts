export type CategoryTypes = {
  _id: string;
  categoryName: string;
  slug: string;
};

export type CategoryChipsTypes = {
  categories: CategoryTypes[];
  basePath: string;
  itemCount: number;
  navAriaLabel: string;
  currentCategorySlug?: string;
};
