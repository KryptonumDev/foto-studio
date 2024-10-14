import {defineType} from 'sanity'

import Quote from '../schemaTypes/components/blogPost/Quote'
import HighlightedText from '../schemaTypes/components/blogPost/HighlightedText'
import ContentBlock from '../schemaTypes/components/blogPost/ContentBlock'
import ContentBlockWithHeader from '../schemaTypes/components/blogPost/ContentBlockWithHeader'
import CenteredImage from '../schemaTypes/components/blogPost/CenteredImage'
import TwoImagesLayout from '../schemaTypes/components/blogPost/TwoImagesLayout'
import NextBlogPost from '../schemaTypes/components/blogPost/NextBlogPost'
import List from '../schemaTypes/components/blogPost/List'
import ImageGrid from '../schemaTypes/components/blogPost/ImageGrid'

export default defineType({
  name: 'BlogPostContent',
  type: 'array',
  title: 'Komponenty dla postów na blogu',
  of: [
    ContentBlockWithHeader,
    ContentBlock,
    List,
    Quote,
    HighlightedText,
    CenteredImage,
    TwoImagesLayout,
    ImageGrid,
    NextBlogPost,
  ],
})
