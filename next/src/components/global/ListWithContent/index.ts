import { CtaData_Query } from '@/components/ui/Button';

import ListWithContent from './ListWithContent';
export default ListWithContent;
export type { ListWithContentTypes } from './ListWithContent.types';

export const ListWithContent_Query = `
  _type == "ListWithContent" => {
    heading,
    cta {
      ${CtaData_Query}    
    },
    list[] {
      _key,
      heading,
      paragraph
    }
  },
`;
