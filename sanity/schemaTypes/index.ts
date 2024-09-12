import cta from './components/cta';
import seo from './components/seo';
import Content from './components/index';

import ReviewCollection from "./collection/ReviewCollection";
import FaqCollection from "./collection/FaqCollection";
import BlogCategoryCollection from './collection/BlogCategoryCollection';
import ImageCategoryCollection from './collection/ImageCategoryCollection';
import ImageCollection from './collection/ImageCollection';
import BlogPostCollection from './collection/BlogPostCollection';

import global from './singleton/global';
import HomePage from './singleton/HomePage';
import AboutPage from './singleton/AboutPage';
import CollaborationPage from './singleton/CollaborationPage';
import ContactPage from './singleton/ContactPage';
import NotFoundPage from './singleton/NotFoundPage';
import GalleryPage from './singleton/GalleryPage';
import BlogPage from './singleton/BlogPage';

export const schemaTypes = [
  seo,
  cta,
  Content,
  global,

  ReviewCollection,
  FaqCollection,
  BlogCategoryCollection,
  BlogPostCollection,
  ImageCategoryCollection,
  ImageCollection,

  HomePage,
  AboutPage,
  CollaborationPage,
  ContactPage,
  NotFoundPage,
  GalleryPage,
  BlogPage
];