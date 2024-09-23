import { ImageDataQuery } from '@/components/ui/Img';
import AboutSection from './AboutSection';

export default AboutSection;
export type { AboutSectionTypes } from './AboutSection.types';

export const AboutSectionQuery = `
  _type == "AboutSection" => {
    heading,
    img { 
      ${ImageDataQuery}
    },
    content {
      contentHeading,
      paragraph
    }
  },
`;
