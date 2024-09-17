import type { ComponentsMapTypes, ComponentTypes } from './DynamicComponents.types';

import HeroHeaderAndImages, { type HeroHeaderAndImagesTypes } from '@/components/global/HeroHeaderAndImages';
import SimpleListAndImage, { type SimpleListAndImageTypes } from '@/components/global/SimpleListAndImage';
import ListWithContent, { type ListWithContentTypes } from '@/components/global/ListWithContent';
import AboutSection, { type AboutSectionTypes } from '@/components/global/AboutSection';

const componentsMap: Record<string, (props: ComponentTypes) => React.ReactNode> = {
  HeroHeaderAndImages: props => <HeroHeaderAndImages {...(props as HeroHeaderAndImagesTypes)} />,
  SimpleListAndImage: props => <SimpleListAndImage {...(props as SimpleListAndImageTypes)} />,
  ListWithContent: props => <ListWithContent {...(props as ListWithContentTypes)} />,
  AboutSection: props => <AboutSection {...(props as AboutSectionTypes)} />,
};

export default function DynamicComponents({ data }: { data: ComponentTypes[] }) {
  return data?.map((item, index) => {
    const componentType = item._type as keyof ComponentsMapTypes;
    const DynamicComponent = componentsMap[componentType]?.({ ...item, index });
    return DynamicComponent || null;
  });
}
