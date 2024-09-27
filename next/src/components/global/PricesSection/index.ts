import { ImgData_Query } from '@/components/ui/Img';
import PricesSection from './PricesSection';
export default PricesSection;
export type { PricesSectionTypes } from './PricesSection.types';

export const PricesSection_Query = `
  _type == "PricesSection" => {
    heading,
    paragraph,
    list[] {
      name,
      priceLabel,
      img {
        ${ImgData_Query}
      },
      description {
        mainText,
        additionalInfo
      }
    }
  },
`;
