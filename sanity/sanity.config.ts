import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

import { singletonActions, singletonTypes, structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'foto-studio',

  projectId: 'l2bwizzm',
  dataset: 'production',

  plugins: [
    structureTool({ structure }), 
    media(), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input
  }
})