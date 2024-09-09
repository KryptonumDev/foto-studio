import { defineField } from 'sanity';
import { blockToText } from '../../utils/blockToText';
import { SimpleTextBlock, TextBlock } from '../../custom/TextBlock';

const title = 'Rozbudowana lista / Szczegółowa lista';
const icon = () => '📝';

export default defineField({
  name: 'ListWithContent',
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
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
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
              name: 'heading',
              type: 'array',
              title: 'Nagłówek',
              of: [SimpleTextBlock],
              validation: Rule => Rule.required().max(1).error("Nagłówek musi zawierać jeden blok tekstowy."),
            }),
            defineField({
              name: 'paragraph',
              type: 'array',
              title: 'Paragraf',
              of: [TextBlock],
              validation: Rule => Rule.required(),
            })
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'paragraph'
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