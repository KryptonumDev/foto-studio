import {defineType} from 'sanity'

import Quote from '../schemaTypes/components/blogPost/Quote'
import HighlightedText from '../schemaTypes/components/blogPost/HighlightedText'
import ContentBlock from '../schemaTypes/components/blogPost/ContentBlock'
import ContentBlockWithHeader from '../schemaTypes/components/blogPost/ContentBlockWithHeader'
import CenteredImage from '../schemaTypes/components/blogPost/CenteredImage'
import TwoImagesLayout from '../schemaTypes/components/blogPost/TwoImagesLayout'
import NextBlogPost from '../schemaTypes/components/blogPost/NextBlogPost'

export default defineType({
  name: 'caseStudyContent',
  type: 'array',
  title: 'Komponenty dla CaseStudy',
  of: [
    ContentBlockWithHeader,
    ContentBlock,
    Quote,
    HighlightedText,
    CenteredImage,
    TwoImagesLayout,
    NextBlogPost,
  ],
})
