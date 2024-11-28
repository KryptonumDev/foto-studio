import {defineType} from 'sanity'

import QuoteWithImage from '../schemaTypes/components/blogPost/QuoteWithImage'
import HighlightedText from '../schemaTypes/components/blogPost/HighlightedText'
import ArticleText from '../schemaTypes/components/blogPost/ArticleText'
import ContentSectionWithHeader from '../schemaTypes/components/blogPost/ContentSectionWithHeader'
import FullWidthImage from '../schemaTypes/components/blogPost/FullWidthImage'
import TwoImagesWithSpaceBetween from '../schemaTypes/components/blogPost/TwoImagesWithSpaceBetween'
import ThreeImagesLayout from '../schemaTypes/components/blogPost/ThreeImagesLayout'
import ImageGrid from '../schemaTypes/components/blogPost/ImageGrid'

export default defineType({
  name: 'BlogPostContent',
  type: 'array',
  title: 'Komponenty dla postów na blogu',
  of: [
    ContentSectionWithHeader,
    ArticleText,
    QuoteWithImage,
    HighlightedText,
    FullWidthImage,
    TwoImagesWithSpaceBetween,
    ThreeImagesLayout,
    ImageGrid,
  ],
})
