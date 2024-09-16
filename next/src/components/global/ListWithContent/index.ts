import { CtaDataQuery } from '@/components/ui/Button';
import ListWithContent from './ListWithContent';

export default ListWithContent;
export type { ListWithContentTypes } from './ListWithContent.types';

export const ListWithContentQuery = `
  _type == "ListWithContent" => {
    heading,
    cta {
      ${CtaDataQuery}    
    },
    list[] {
      _key,
      heading,
      paragraph
    }
  },
`;
