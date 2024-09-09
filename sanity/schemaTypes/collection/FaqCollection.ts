import { defineField, defineType } from "sanity";
import { TextBlock } from "../../custom/TextBlock";

export default defineType({
  name: 'FaqCollection',
  type: 'document',
  title: 'Zbiór elementów FAQ',
  icon: () => '❓',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Pytanie',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'answer',
      type: 'array',
      title: 'Odpowiedź',
      of: [TextBlock],
      validation: Rule => Rule.required()
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer',
      icon: '❓'
    }
  },
});