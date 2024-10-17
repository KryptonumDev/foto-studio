import { ImgData_Query } from '@/components/ui/Img';

import ProgressBarSection from './ProgressBarSection';
export type { ProgressBarSectionTypes } from './ProgressBarSection.types';
export default ProgressBarSection;

export const ProgressBarSection_Query = `
   _type == "ProgressBarSection" => {
      heading[] {
        ...,
        children[] {
           ...,
           _type == "inlineImg" => {
              ...,
              ${ImgData_Query}
           }
        }
      },
      list[] {
        text,
        _key
      }
   },
`;
