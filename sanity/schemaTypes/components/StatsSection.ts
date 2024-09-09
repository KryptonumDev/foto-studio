import { defineField } from 'sanity';

const title = 'Sekcja z statystykami';
const icon = () => '📊';

export default defineField({
  name: 'StatsSection',
  type: 'object',
  icon,
  title,
  fields: [
    defineField({
      name: 'list',
      type: 'array',
      title: 'Statystyki',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              type: 'number',
              title: 'Liczba',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'label',
              type: 'string',
              title: 'Opis',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'number',
              subtitle: 'label',
            }
          }
        },
      ],
      validation: Rule => Rule.required().length(3),
    }),
  ],
  preview: {
    prepare: () => ({
      title: title,
      icon
    })
  }
});
