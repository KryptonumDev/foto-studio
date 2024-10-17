import { CtaData_Query } from '@/components/ui/Button';

import MapSection from './MapSection';
export default MapSection;
export type { MapSectionTypes } from './MapSection.types';

export const MapSection_Query = `
  _type == "MapSection" => {
    heading,
    location,
    tel,
    addressLink {
      ${CtaData_Query}
    }
  },
`;
