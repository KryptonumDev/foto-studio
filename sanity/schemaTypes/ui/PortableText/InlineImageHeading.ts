import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'InlineImageHeading',
  type: 'array',
  title: 'InlineImageHeading',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [{title: 'Normalny', value: 'normal'}],
      lists: [],
      marks: {
        decorators: [
          {title: 'Pogrubiony', value: 'strong'},
          {title: 'Kursywa', value: 'em'},
        ],
        annotations: [],
      },
      of: [
        {
          name: 'inlineImg',
          type: 'image',
          title: 'Zdjęcie',
        },
      ],
    }),
  ],
})
