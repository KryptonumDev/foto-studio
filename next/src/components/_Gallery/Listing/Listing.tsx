import type { ListingTypes } from './Listing.types';
import CategoryChips from '@/components/global/CategoryChips';
import { getImages } from '@/actions/getImages';
import { NUMBER_OF_IMAGES_TO_FETCH } from '.';
import ImageList from './_ImageList';

export default async function Listing({ categories, imageCount, currentCategorySlug = '' }: ListingTypes) {
  const _categories = [{ _id: 'all', categoryName: 'Wszystkie', slug: '' }, ...categories];
  const initialImages = await getImages(0, NUMBER_OF_IMAGES_TO_FETCH, currentCategorySlug);

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
        initialImages={initialImages}
        imageCount={imageCount}
        currentCategorySlug={currentCategorySlug}
      />
    </section>
  );
}
