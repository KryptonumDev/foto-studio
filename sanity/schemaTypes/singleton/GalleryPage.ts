import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'GalleryPage',
  type: 'document',
  title: 'Galeria',
  icon: () => '🖼️',
  fields: [
    defineField({
      name: 'header',
      type: 'object',
      title: 'Widok listy zdjęć',
      fields: [
        defineField({
          name: 'heading',
          type: 'Heading',
          title: 'Nagłówek',
          validation: (Rule) =>
            Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'content',
      title: 'Komponenty podstrony',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
})
