import { defineField, defineType } from "sanity";
import { validateSlug } from "../../utils/customValidations";
import { slugify } from '../../utils/slugify';

export default defineType({
  name: 'ImageCategoryCollection',
  type: 'document',
  title: 'Galeria - Kategorie',
  icon: () => '🏷️',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Slug, to unikalny ciąg znaków, który znajdziemy zazwyczaj po ukośniku w adresie URL podstrony. Dzięki niemu jego forma jest zrozumiała dla użytkowników.',
      options: {
        source: 'name',
        slugify: input => `${slugify(input)}`,
      },
      validation: Rule => Rule.custom(validateSlug).required()
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      icon: '🏷️'
    }
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    }
  ]
});