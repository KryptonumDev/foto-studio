import { defineField, defineType } from "sanity"
import { SimpleTextBlock } from "../../custom/TextBlock";

export default defineType({
  name: 'BlogPage',
  type: 'document',
  title: 'Blog',
  icon: () => '📝',
  fields: [
    defineField({
      name: 'header',
      type: 'object',
      title: 'Widok listy postów',
      fields: [
        defineField({
          name: 'heading',
          type: 'array',
          title: 'Nagłówek',
          of: [SimpleTextBlock],
          validation: Rule => Rule.required().length(1).error("Nagłówek musi zawierać jeden blok tekstowy."),
        }),
        defineField({
          name: 'paragraph',
          type: 'array',
          title: 'Paragraf (opcjonalny)',
          of: [SimpleTextBlock],
          validation: Rule => Rule.length(1).warning("Paragraf może zawierać tylko jeden blok tekstowy."),
        }),
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'content',
      title: 'Komponenty podstrony'
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
});
