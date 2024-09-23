import { ImageDataQuery } from '@/components/ui/Img';
import ProgressBarSection from './ProgressBarSection';

export type { ProgressBarSectionTypes } from './ProgressBarSection.types';
export default ProgressBarSection;

export const ProgressBarSectionQuery = `
   _type == "ProgressBarSection" => {
      heading[] {
        ...,
        children[] {
           ...,
           _type == "inlineImg" => {
              ...,
              ${ImageDataQuery}
           }
        }
      },
      list[] {
        text,
        _key
      }
   },
`;
