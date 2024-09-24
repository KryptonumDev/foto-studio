import { ImgData_Query } from '@/components/ui/Img';
import AboutSection from './AboutSection';

export default AboutSection;
export type { AboutSectionTypes } from './AboutSection.types';

export const AboutSection_Query = `
  _type == "AboutSection" => {
    heading,
    img { 
      ${ImgData_Query}
    },
    content {
      contentHeading,
      paragraph
    }
  },
`;
