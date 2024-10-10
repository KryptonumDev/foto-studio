import type { ListingTypes } from './Listing.types';
import CategoryChips from '@/components/global/CategoryChips';
import ImageList from './_ImageList';

export default function Listing({ categories, images, imageCount, currentCategorySlug = '' }: ListingTypes) {
  const _categories = [{ _id: 'all', categoryName: 'Wszystkie', slug: '' }, ...categories];

  return (
    <section className='mb'>
      <div className='max-width'>
        <CategoryChips
          basePath='galeria'
          categories={_categories}
          itemCount={imageCount}
          currentCategorySlug={currentCategorySlug}
        />
      </div>
      <ImageList
        images={images}
        imageCount={imageCount}
      />
    </section>
  );
}
