import { defineField } from 'sanity';
import { blockToText } from '../../utils/blockToText';
import { SimpleTextBlock, TextBlock } from '../../custom/TextBlock';

const title = 'Sekcja z obrazkiem i treścią ';
const icon = () => '🖼️📄';

export default defineField({
  name: 'ImageAndContentSection',
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
          validation: Rule => Rule.required().max(1).error('Tytuł musi zawierać jeden blok tekstowy.'),
        }),
        defineField({
          name: 'cta',
          type: 'cta',
          title: 'Wezwanie do działania',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'paragraph',
          type: 'array',
          title: 'Paragraf (opcjonalny)',
          of: [TextBlock]
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
      subtitle: blockToText(subtitle),
      media
    })
  }
});
