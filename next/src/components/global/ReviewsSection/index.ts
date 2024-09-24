import { ImgData_Query } from '@/components/ui/Img';
import ReviewsSection from './ReviewsSection';
export default ReviewsSection;
export type { ReviewsSectionTypes } from './ReviewsSection.types';

export const ReviewsSection_Query = `
  _type == "ReviewsSection" => {
    heading,
    list[]->{
      _id,
      title,
      content,
      image {
        ${ImgData_Query}
      }
    }
  },
`;
