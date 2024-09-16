import type { ComponentsMapTypes, ComponentTypes } from './DynamicComponents.types';

import HeroHeaderAndImages, { type HeroHeaderAndImagesTypes } from '@/components/global/HeroHeaderAndImages';

const componentsMap: Record<string, (props: ComponentTypes) => React.ReactNode> = {
  HeroHeaderAndImages: props => <HeroHeaderAndImages {...(props as HeroHeaderAndImagesTypes)} />,
};

export default function DynamicComponents({ data }: { data: ComponentTypes[] }) {
  return data?.map((item, index) => {
    const componentType = item._type as keyof ComponentsMapTypes;
    const DynamicComponent = componentsMap[componentType]?.({ ...item, index });
    return DynamicComponent || null;
  });
}
