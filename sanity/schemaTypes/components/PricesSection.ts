import { defineField } from 'sanity';
import { blockToText } from '../../utils/blockToText';
import { SimpleTextBlock, TextBlock } from '../../custom/TextBlock';

const title = 'Sekcja z cennikiem';
const icon = () => '💵';

export default defineField({
  name: 'PricesSection',
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
              type: 'object',
              title: 'Opis',
              fields: [
                defineField({
                  name: 'mainText',
                  type: 'array',
                  title: 'Główna treść',
                  of: [TextBlock],
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'additionalInfo',
                  type: 'array',
                  title: 'Dodatkowe informacje',
                  of: [TextBlock],
                  validation: Rule => Rule.required()
                })
              ],
              options: { collapsible: true, collapsed: true },
              validation: Rule => Rule.required(),
              preview: {
                select: {
                  title: 'mainText'
                }
              }
            })
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'priceLabel'
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