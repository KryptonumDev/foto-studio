import type { StringRule } from "sanity";
import { validateLink } from "../utils/customValidations";

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
      validation: (Rule: StringRule) => Rule.custom(validateLink).required()
    }
  ]
};

//without headings, ol, ul and link
export const SimpleTextBlock = {
  type: 'block',
  styles: [
    { title: 'Normalny', value: 'normal' }
  ],
  lists: [],
  marks: {
    decorators: [
      { title: 'Pogrubiony', value: 'strong' },
      { title: 'Kursywa', value: 'em' },
      { title: 'Podkreślenie', value: 'underline' }
    ],
    annotations: []
  }
}


//without headings
export const TextBlock = {
  type: 'block',
  styles: [
    { title: 'Normlany', value: 'normal' },
  ],
  lists: [
    {title: 'Lista numerowana', value: 'number'},
    {title: 'Lista wypunktowana', value: 'bullet'}   
  ],
  marks: {
    decorators: [
      { title: 'Pogrubiony', value: 'strong' },
      { title: 'Kursywa', value: 'em' },
      { title: 'Podkreślenie', value: 'underline' }
    ],
    annotations: [CustomLink]
  }
};

export const FullTextBlock = {
  type: 'block',
  styles: [
    { title: 'Normalny', value: 'normal' },
    { title: 'Nagłówek H2', value: 'h2' },
    { title: 'Nagłówek H3', value: 'h3' }
  ],
  lists: [
    {title: 'Lista numerowana', value: 'number'},
    {title: 'Lista wypunktowana', value: 'bullet'}   
  ],
  marks: {
    decorators: [
      { title: 'Pogrubiony', value: 'strong' },
      { title: 'Kursywa', value: 'em' },
      { title: 'Podkreślenie', value: 'underline' }
    ],
    annotations: [CustomLink]
  }
}