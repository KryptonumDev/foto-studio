export type CategoryTypes = {
  _id: string;
  categoryName: string;
  slug: string;
};

export type CategoryChipsTypes = {
  categories: CategoryTypes[];
  postCount: number;
  currentCategorySlug?: string;
};
