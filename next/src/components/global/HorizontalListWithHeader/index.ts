import { CtaData_Query } from '@/components/ui/Button';

import HorizontalListWithHeader from './HorizontalListWithHeader';
export default HorizontalListWithHeader;
export type { HorizontalListWithHeaderTypes } from './HorizontalListWithHeader.types';

export const HorizontalListWithHeader_Query = `
  _type == "HorizontalListWithHeader" => {
    heading,
    subtitle,
    cta {
      ${CtaData_Query}
    },
    list[] {
      text,
      _key
    }
  },
`;
