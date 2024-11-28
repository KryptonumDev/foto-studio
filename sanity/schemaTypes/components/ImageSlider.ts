import {defineField} from 'sanity'

const title = 'Slider z zdjęciami'
const icon = () => '📸'

export default defineField({
  name: 'ImageSlider',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
      title: 'Zdjęcia',
      validation: (Rule) => Rule.required().min(5).error('Należy dodać minimum 5 zdjęć.'),
    }),
  ],
  preview: {
    prepare: () => ({
      title,
      icon,
    }),
  },
})
