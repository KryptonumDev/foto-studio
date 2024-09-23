import { defineField } from 'sanity';
import { SimpleTextBlock } from '../../custom/TextBlock';

const title = 'Sekcja lokalizacji (mapa)';
const icon = () => '🗺️';

export default defineField({
  name: 'MapSection',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'array',
      title: 'Tytuł',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().length(1).error('Tytuł musi zawierać jeden blok tekstowy.')
    }),
    defineField({
      name: 'location',
      type: 'geopoint',
      title: 'Lokalizacja',
      description: 'Wskaź lokalizację na mapie.',
      validation: Rule => Rule.required().error('Lokalizacja jest wymagana'),
    }),
    defineField({
      name: 'zoom',
      type: 'number',
      title: 'Zoom',
      description: 'Poziom powiększenia mapy (1-20).',
      initialValue: 16,
      validation: Rule => Rule.min(1).max(20).error('Zoom musi być pomiędzy 1 a 20')
    }),
    defineField({
      name: 'tel',
      type: 'string',
      title: 'Numer telefonu',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'addressLink',
      type: 'cta',
      title: 'Adres',
      description: 'Użyj tego pola, aby dodać adres URL, który użytkownicy mogą kliknąć, aby zobaczyć dokładną lokalizację na mapie Google.',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
});
