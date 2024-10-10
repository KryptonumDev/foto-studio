import {defineType} from 'sanity'

import HeroHeaderAndImages from '../schemaTypes/components/HeroHeaderAndImages'
import ReviewsSection from '../schemaTypes/components/ReviewsSection'
import FaqSection from '../schemaTypes/components/FaqSection'
import StatsSection from '../schemaTypes/components/StatsSection'
import ContactForm from '../schemaTypes/components/ContactForm'
import ProgressBarSection from '../schemaTypes/components/ProgressBarSection'
import FeaturedPostsSection from '../schemaTypes/components/FeaturedPostsSection'
import AboutSection from '../schemaTypes/components/AboutSection'
import ImageSlider from '../schemaTypes/components/ImageSlider'
import SimpleListAndImage from '../schemaTypes/components/SimpleListAndImage'
import ListWithContent from '../schemaTypes/components/ListWithContent'
import PricesSection from '../schemaTypes/components/PricesSection'
import IntroHeader from '../schemaTypes/components/IntroHeader'
import MapSection from '../schemaTypes/components/MapSection'
import StationaryOfferSection from '../schemaTypes/components/StationaryOfferSection'
import HeroSection from '../schemaTypes/components/HeroSection'
import HorizontalListWithHeader from '../schemaTypes/components/HorizontalListWithHeader'
import NotFoundSection from '../schemaTypes/components/NotFoundSection'
import InlineImageHeader from '../schemaTypes/components/InlineImageHeader'

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
    IntroHeader,
    MapSection,
    StationaryOfferSection,
    HeroSection,
    HorizontalListWithHeader,
    NotFoundSection,
    InlineImageHeader,
  ],
})
