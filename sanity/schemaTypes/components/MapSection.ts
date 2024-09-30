import {defineField} from 'sanity'
import {SimpleTextBlock} from '../../custom/TextBlock'
import {toPlainText} from '../../utils/toPlainText'

const title = 'Sekcja lokalizacji (mapa)'
const icon = () => '🗺️'

export default defineField({
  name: 'MapSection',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Nagłówek',
      of: [SimpleTextBlock],
      validation: (Rule) =>
        Rule.required().length(1).error('Nagłówek musi zawierać jeden blok tekstowy.'),
    }),
    defineField({
      name: 'location',
      type: 'url',
      title: 'Lokalizacja',
      description:
        'Wprowadź adres URL do osadzonej mapy Google. Aby uzyskać link, przejdź do Google Maps, wybierz lokalizację, kliknij "Udostępnij", a następnie "Osadź mapę" i skopiuj link z pola iframe.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tel',
      type: 'string',
      title: 'Numer telefonu',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'addressLink',
      type: 'cta',
      title: 'Adres',
      description:
        'Użyj tego pola, aby dodać adres URL, który użytkownicy mogą kliknąć, aby zobaczyć dokładną lokalizację na mapie Google.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({heading}) => ({
      title,
      subtitle: toPlainText(heading),
      icon,
    }),
  },
})
