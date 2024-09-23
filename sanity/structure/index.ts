import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import {schemaTypes} from '../schemaTypes'

export const createSingleton = (S: StructureBuilder, name: string) => {
  const {title, icon} = schemaTypes.find((item) => item.name === name) as {
    title: string
    icon: React.ReactNode
  }
  return S.listItem()
    .id(name)
    .title(title)
    .icon(icon)
    .child(S.document().title(title).schemaType(name).documentId(name))
}

export const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
export const singletonTypes = new Set(['global'])

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Zawartość')
    .items([
      createSingleton(S, 'global'),
      S.divider(),
      createSingleton(S, 'HomePage'),
      createSingleton(S, 'AboutPage'),
      createSingleton(S, 'CollaborationPage'),
      createSingleton(S, 'ContactPage'),
      createSingleton(S, 'GalleryPage'),
      createSingleton(S, 'BlogPage'),
      createSingleton(S, 'NotFoundPage'),
      S.divider(),
      S.documentTypeListItem('ImageCategoryCollection'),
      S.documentTypeListItem('ImageCollection'),
      S.divider(),
      S.documentTypeListItem('BlogCategoryCollection'),
      S.documentTypeListItem('BlogPostCollection'),
      S.divider(),
      S.documentTypeListItem('FaqCollection'),
      S.documentTypeListItem('ReviewCollection'),
    ])
