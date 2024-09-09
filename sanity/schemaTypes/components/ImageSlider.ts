import { defineField } from 'sanity';

const title = 'Slider z zdjęciami';
const icon = () => '📸';

export default defineField({
  name: 'ImageSlider',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
      title: 'Zdjęcia',
      validation: Rule => Rule.required().min(6).error('Należy dodać minimum 6 zdjęć.'),
    }),
  ],
  preview: {
    prepare: () => ({
      title,
      icon
    })
  }
});