import { defineField } from 'sanity';
import { SimpleTextBlock } from '../../custom/TextBlock';
import { blockToText } from '../../utils/blockToText';

const title = 'Formularz kontaktowy';
const icon = () => '💬';

export default defineField({
  name: 'ContactForm',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Nagłówek',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().max(1).error("Nagłówek może zawierać tylko jeden blok tekstowy."),
    }),
    defineField({
      name: 'topics',
      type: 'array',
      title: 'Tematy wiadomości',
      of: [{ type: 'string'}],
      options: { layout: 'tags' },
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({ heading }) => ({
      title,
      subtitle: blockToText(heading),
      icon,
    }),
  },
});
