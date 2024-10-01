import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

const title = 'Sekcja z cennikiem'
const icon = () => '💵'

export default defineField({
  name: 'PricesSection',
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
      name: 'paragraph',
      type: 'TextBlock',
      title: 'Paragraf',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie (opcjonalne)',
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'Heading',
              title: 'Nazwa',
              validation: (Rule) =>
                Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
            }),
            defineField({
              name: 'priceLabel',
              type: 'string',
              title: 'Informacja o cenie',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'object',
              title: 'Opis',
              fields: [
                defineField({
                  name: 'mainText',
                  type: 'TextBlock',
                  title: 'Główna treść',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'additionalInfo',
                  type: 'TextBlock',
                  title: 'Dodatkowe informacje (opcjonalne)',
                }),
              ],
              options: {collapsible: true, collapsed: true},
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'priceLabel',
            },
            prepare: ({title, subtitle}) => ({
              title: toPlainText(title),
              subtitle,
            }),
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({heading}) => ({
      title,
      subtitle: toPlainText(heading),
      icon,
    }),
  },
})
