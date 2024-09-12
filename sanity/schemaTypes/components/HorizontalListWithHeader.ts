import { defineField } from 'sanity';
import { toPlainText } from '../../utils/toPlainText';
import { SimpleTextBlock } from '../../custom/TextBlock';

const title = 'Sekcja z horyzontalną listą i nagłówkiem';
const icon = () => '➡️';

export default defineField({
  name: 'HorizontalListWithHeader',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'array',
      title: 'Tytuł',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().length(1).error("Tytuł musi zawierać jeden blok tekstowy."),
    }),
    defineField({
      name: 'subtitle',
      type: 'array',
      title: 'Podtytuł',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().length(1).error("Podtytuł musi zawierać jeden blok tekstowy."),
    }),
    defineField({
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania (opcjonalne)',
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
              type: 'array',
              title: 'Treść',
              of: [SimpleTextBlock],
              validation: Rule => Rule.required().length(1).error("Treść musi zawierać jeden blok tekstowy.")
            })
          ],
          preview: {
            select: {
              title: 'text'
            }
          }
        }
      ]
    })
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({ heading }) => ({
      title,
      subtitle: toPlainText(heading),
      icon,
    }),
  },
});
