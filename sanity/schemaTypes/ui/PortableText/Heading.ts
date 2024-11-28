import {defineType, defineArrayMember} from 'sanity'
import CustomInput from './CustomInput'

export default defineType({
  name: 'Heading',
  type: 'array',
  title: 'Heading',
  components: {
    // @ts-ignore
    input: CustomInput,
  },
  of: [
    defineArrayMember({
      type: 'block',
      styles: [{title: 'Normalny', value: 'normal'}],
      lists: [],
      marks: {
        decorators: [
          {title: 'Pogrubiony', value: 'strong'},
          {title: 'Kursywa', value: 'em'},
        ],
        annotations: [],
      },
    }),
  ],
})
