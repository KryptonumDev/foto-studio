import { defineField, defineType } from "sanity"

export default defineType({
  name: 'AboutPage',
  type: 'document',
  title: 'O marce',
  icon: () => '📝',
  fields: [
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
