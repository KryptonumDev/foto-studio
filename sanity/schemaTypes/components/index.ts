import { defineType } from "sanity";

import HeroHeaderAndImages from "./HeroHeaderAndImages";
import ReviewsSection from "./ReviewsSection";
import FaqSection from "./FaqSection";
import StatsSection from './StatsSection'
import ContactForm from "./ContactForm";
import WhyChooseUsSection from "./WhyChooseUsSection";
import FeaturedPostsSection from './FeaturedPostsSection';
import AboutSection from "./AboutSection";
import ImageSlider from "./ImageSlider";
import SimpleListAndImage from "./SimpleListAndImage";
import ListWithContent from "./ListWithContent";
import PricingSection from "./PricingSection";
import MainHeader from './MainHeader';
import MapSection from './MapSection';
import ImageAndContentSection from "./ImageAndContentSection";
import ExpandedHeader from "./ExpandedHeader";
import HorizontalListWithHeader from "./HorizontalListWithHeader";
import NotFoundSection from "./NotFoundSection";

export default defineType({
  name: 'content',
  type: 'array',
  title: 'Komponenty',
  of: [
    HeroHeaderAndImages,
    ReviewsSection,
    FaqSection,
    StatsSection,
    ContactForm,
    WhyChooseUsSection,
    FeaturedPostsSection,
    AboutSection,
    ImageSlider,
    SimpleListAndImage,
    ListWithContent,
    PricingSection,
    MainHeader,
    MapSection,
    ImageAndContentSection,
    ExpandedHeader,
    HorizontalListWithHeader,
    NotFoundSection
  ]
});