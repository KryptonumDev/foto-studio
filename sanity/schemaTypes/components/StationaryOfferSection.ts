import { defineField } from 'sanity';
import { toPlainText } from '../../utils/toPlainText';
import { SimpleTextBlock, TextBlock } from '../../custom/TextBlock';

const title = 'Sekcja z ofertą stacjonarną';
const icon = () => '🖼️📄';

export default defineField({
  name: 'StationaryOfferSection',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'content',
      type: 'object',
      title: 'Zawartość (po prawej stronie)',
      fields: [
        defineField({
          name: 'title',
          type: 'array',
          title: 'Tytuł',
          of: [SimpleTextBlock],
          validation: Rule => Rule.required().length(1).error('Tytuł musi zawierać jeden blok tekstowy.'),
        }),
        defineField({
          name: 'cta',
          type: 'cta',
          title: 'Wezwanie do działania',
          validation: Rule => Rule.required()
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
        }),
      ],
      validation: Rule => Rule.required(),
      preview: {
        select: {
          title: 'title',
          icon: '📄'
        }
      }
    }),
    defineField({
      name: 'sideImg',
      type: 'image',
      title: 'Obrazek (po lewej stronie)',
      validation: Rule => Rule.required()
    }),
  ],
  preview: {
    select: {
      subtitle: 'content.title',   
      media: 'sideImg'
    },
    prepare: ({ subtitle, media }) => ({
      title,
      subtitle: toPlainText(subtitle),
      media
    })
  }
});
