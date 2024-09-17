import { ImageDataQuery } from '@/components/ui/Image';
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
