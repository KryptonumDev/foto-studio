import { defineField } from 'sanity';
import { blockToText } from '../../utils/blockToText';
import { SimpleTextBlock, TextBlock } from '../../custom/TextBlock';

const title = 'Sekcja z cennikiem';
const icon = () => '💵';

export default defineField({
  name: 'PricingSection',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Nagłówek',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().max(1).error("Nagłówek musi zawierać jeden blok tekstowy")
    }),
    defineField({
      name: 'paragraph',
      type: 'array',
      title: 'Paragraf',
      of: [TextBlock],
      validation: Rule => Rule.required(),
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
              type: 'array',
              title: 'Nazwa',
              of: [SimpleTextBlock],
              validation: Rule => Rule.required().max(1).error("Nazwa musi zawierać jeden blok tekstowy."),
            }),
            defineField({
              name: 'priceLabel',
              type: 'string',
              title: 'Informacja o cenie',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'img',
              type: 'image',
              title: 'Zdjęcie (opcjonalne)'
            }),
            defineField({
              name: 'description',
              type: 'array',
              title: 'Opis',
              of: [TextBlock],
              validation: Rule => Rule.required(),
            })
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description'
            }
          },
        },
      ],
      validation: Rule => Rule.required(),
    })
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare: ({ heading }) => ({
      title,
      subtitle: blockToText(heading),
      icon
    })
  }
});