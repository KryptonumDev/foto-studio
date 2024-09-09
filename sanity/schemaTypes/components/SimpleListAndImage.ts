import { defineField } from 'sanity';
import { blockToText } from '../../utils/blockToText';
import { SimpleTextBlock } from '../../custom/TextBlock';

const title = 'Prosta lista z obrazkiem';
const icon = () => '📋';

export default defineField({
  name: 'SimpleListAndImage',
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
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'img'
    },
    prepare: ({ heading, media }) => ({
      title,
      subtitle: blockToText(heading),
      media
    })
  }
});