import {defineType, defineArrayMember, StringRule} from 'sanity'
import CustomInput from './CustomInput'
import {validateLink} from '../../../utils/customValidations'

const CustomLink = {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      description: 'Link relatywny lub absolutny (wymagany protokół https://)',
      validation: (Rule: StringRule) => Rule.custom(validateLink).required(),
    },
  ],
}

export default defineType({
  name: 'TextBlock',
  type: 'array',
  title: 'TextBlock',
  components: {
    // @ts-ignore
    input: CustomInput,
  },
  of: [
    defineArrayMember({
      type: 'block',
      styles: [{title: 'Normlany', value: 'normal'}],
      lists: [
        {title: 'Lista numerowana', value: 'number'},
        {title: 'Lista wypunktowana', value: 'bullet'},
      ],
      marks: {
        decorators: [
          {title: 'Pogrubiony', value: 'strong'},
          {title: 'Kursywa', value: 'em'},
          {title: 'Podkreślenie', value: 'underline'},
        ],
        annotations: [CustomLink],
      },
    }),
  ],
})
