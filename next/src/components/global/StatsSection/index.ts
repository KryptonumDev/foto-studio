import StatsSection from './StatsSection';
export default StatsSection;
export type { StatsSectionTypes } from './StatsSection.types';

export const StatsSection_Query = `
  _type == "StatsSection" => {
    heading,
    paragraph,
    list[]{
      number,
      label
    }
  },
`;
