import {defineType} from 'sanity'

import Quote from '../schemaTypes/components/blogPost/Quote'
import HighlightedText from '../schemaTypes/components/blogPost/HighlightedText'
import ContentBlock from '../schemaTypes/components/blogPost/ContentBlock'
import ContentBlockWithHeader from '../schemaTypes/components/blogPost/ContentBlockWithHeader'
import CenteredImage from '../schemaTypes/components/blogPost/CenteredImage'
import List from '../schemaTypes/components/blogPost/List'
import ImageGrid from '../schemaTypes/components/blogPost/ImageGrid'
import NextBlogPost from '../schemaTypes/components/blogPost/NextBlogPost'

export default defineType({
  name: 'articleContent',
  type: 'array',
  title: 'Komponenty dla artykułu',
  of: [
    ContentBlockWithHeader,
    ContentBlock,
    List,
    Quote,
    HighlightedText,
    CenteredImage,
    ImageGrid,
    NextBlogPost,
  ],
})
