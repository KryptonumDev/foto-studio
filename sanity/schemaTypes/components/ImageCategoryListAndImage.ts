import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

const title = 'Lista kategorii obrazków z zdjęciem'
const icon = () => '📋'

export default defineField({
  name: 'ImageCategoryListAndImage',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'Heading',
      title: 'Nagłówek',
      validation: (Rule) =>
        Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [
        {
          type: 'object',
          title: 'Element listy',
          fields: [
            defineField({
              name: 'text',
              type: 'Heading',
              title: 'Treść',
              validation: (Rule) =>
                Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
            }),
            defineField({
              name: 'imgCategory',
              type: 'reference',
              title: 'Kategoria obrazu',
              to: [{type: 'ImageCategoryCollection'}],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'img',
              type: 'image',
              title: 'Zdjęcie',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              text: 'text',
              category: 'imgCategory->categoryName',
              img: 'img',
            },
            prepare: ({text, category, img}) => ({
              title: toPlainText(text),
              subtitle: category,
              media: img,
              icon,
            }),
          },
        },
      ],
    }),
    defineField({
      name: 'imagePosition',
      type: 'string',
      title: 'Pozycja obrazu',
      description: 'Wybierz, po której stronie ma być obraz: po lewej czy po prawej stronie listy.',
      options: {
        list: [
          {title: 'Lewo', value: 'left'},
          {title: 'Prawo', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'right',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'img',
    },
    prepare: ({heading, media}) => ({
      title,
      subtitle: toPlainText(heading),
      media,
    }),
  },
})
