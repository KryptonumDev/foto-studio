import { ImgData_Query } from '@/components/ui/Img';
import FeaturedPostsSection from './FeaturedPostsSection';
export default FeaturedPostsSection;
export type { FeaturedPostsSectionTypes } from './FeaturedPostsSection.types';

export const FeaturedPostsSection_Query = `
  _type == "FeaturedPostsSection" => {
    heading,
    list[]->{
      _id,
      "slug": slug.current,
      image {
        ${ImgData_Query}
      }
    }
  },
`;
