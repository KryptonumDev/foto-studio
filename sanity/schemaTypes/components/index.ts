import { defineType } from "sanity";

import HeroHeaderAndImages from "./HeroHeaderAndImages";
import ReviewsSection from "./ReviewsSection";
import FaqSection from "./FaqSection";
import StatsSection from './StatsSection'
import ContactForm from "./ContactForm";
import ProgressBarSection from "./ProgressBarSection";
import FeaturedPostsSection from './FeaturedPostsSection';
import AboutSection from "./AboutSection";
import ImageSlider from "./ImageSlider";
import SimpleListAndImage from "./SimpleListAndImage";
import ListWithContent from "./ListWithContent";
import PricesSection from "./PricesSection";
import Header from './Header';
import MapSection from './MapSection';
import StationaryOfferSection from "./StationaryOfferSection";
import HeroSection from "./HeroSection";
import HorizontalListWithHeader from "./HorizontalListWithHeader";
import NotFoundSection from "./NotFoundSection";
import InlineImageHeader from './InlineImageHeader'

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
    ProgressBarSection,
    FeaturedPostsSection,
    AboutSection,
    ImageSlider,
    SimpleListAndImage,
    ListWithContent,
    PricesSection,
    Header,
    MapSection,
    StationaryOfferSection,
    HeroSection,
    HorizontalListWithHeader,
    NotFoundSection,
    InlineImageHeader
  ]
});