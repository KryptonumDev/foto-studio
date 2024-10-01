import {defineField, defineType} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

export default defineType({
  name: 'ReviewCollection',
  title: 'Zbiór opinii klientów',
  type: 'document',
  icon: () => '⭐️',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tytuł recenzji',
      description:
        'Wprowadź tytuł recenzji, imię i nazwisko recenzenta lub nazwę firmy. To pole może być użyte do wyróżnienia autora opinii lub nadania jej nagłówka.',
      validation: (Rule) =>
        Rule.required().max(100).error('Tytuł recenzji nie może przekraczać 100 znaków.'),
    }),
    defineField({
      name: 'content',
      type: 'TextBlock',
      title: 'Treść recenzji',
      validation: (Rule) =>
        Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'img',
      icon: 'icon',
      content: 'content',
    },
    prepare: ({content, ...rest}) => ({
      ...rest,
      subtitle: toPlainText(content),
    }),
  },
})
