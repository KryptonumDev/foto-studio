import { defineField, defineType } from 'sanity';
import { validateRelativeLink } from '../../utils/customValidations'; 
import { SimpleTextBlock } from '../../custom/TextBlock';

const OrganizationSchema = [
  defineField({
    name: 'name',
    type: 'string',
    title: 'Nazwa Twojej organizacji',
  }),
  defineField({
    name: 'description',
    type: 'text',
    rows: 3,
    title: 'Opis Twojej organizacji',
  }),
]

const NavLinks = {
  type: 'object',
  title: 'Linki nawigacyjne',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'string',
      title: 'Link',
      validation: Rule => Rule.custom(validateRelativeLink).required()
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'href',
    }
  }
};


export default defineType({
  name: 'global',
  type: 'document',
  title: 'Globalne',
  icon: () => '🌍',
  fields: [
    defineField({
      name: 'nav',
      type: 'object',
      title: 'Nawigacja',
      fields: [
        defineField({
          name: 'annotation',
          type: 'text',
          rows: 3,
          title: 'Adnotacja (opcjonale)',
        }),
        defineField({
          name: 'links',
          type: 'array',
          title: 'Linki',
          of: [NavLinks],
          validation: Rule => Rule.required(),
        }),
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'footer',
      type: 'object',
      title: 'Stopka',
      options: { collapsible: true, collapsed: true },
      validation: Rule => Rule.required(),
      fields: [
        defineField({
          name: 'heading',
          type: 'array',
          title: 'Nagłówek',
          of: [SimpleTextBlock],
          validation: Rule => Rule.required().length(1).error('Nagłówek musi zawierać jeden blok tekstowy.'),
        }),
        defineField({
          name: 'cta',
          type: 'cta',
          title: 'Wezwanie do działania',
          validation: Rule => Rule.required()
        })
      ],
    }),
    defineField({
      name: 'privacyPolicy',
      type: 'url',
      title: 'Polityka Prywatności',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Adres e-mail',
      validation: Rule => Rule.required().email(),
    }),
    defineField({
      name: 'tel',
      type: 'string',
      title: 'Numer telefonu (opcjonalnie)',
    }),
    defineField({
      name: 'socials',
      type: 'object',
      title: 'Social media',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'facebook',
          type: 'url',
          title: 'Facebook',
          validation: Rule => Rule.uri({ scheme: ['https'] }).error('Podaj prawidłowy adres URL (rozpoczynający się od https://)'),
        }),
        defineField({
          name: 'instagram',
          type: 'url',
          title: 'Instagram',
          validation: (Rule) => Rule.uri({ scheme: ['https'] }).error('Podaj prawidłowy adres URL (rozpoczynający się od https://)'),
        }),
        defineField({
          name: 'youtube',
          type: 'url',
          title: 'YouTube',
          validation: (Rule) => Rule.uri({ scheme: ['https'] }).error('Podaj prawidłowy adres URL (rozpoczynający się od https://)'),
        }),
        defineField({
          name: 'tiktok',
          type: 'url',
          title: 'TikTok',
          validation: (Rule) => Rule.uri({ scheme: ['https'] }).error('Podaj prawidłowy adres URL (rozpoczynający się od https://)'),
        }),
        defineField({
          name: 'linkedin',
          type: 'url',
          title: 'Linkedin',
          validation: (Rule) => Rule.uri({ scheme: ['https'] }).error('Podaj prawidłowy adres URL (rozpoczynający się od https://)'),
        }),
      ],
    }), 
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [
        defineField({
          name: 'og_Img',
          type: 'image',
          title: 'OG Image',
          description:
            'Zdjęcie, które jest widoczne przy udostępnianiu strony w mediach społecznościowych. Wymiary zdjęcia powinny mieć 1200x630px',
        }),
      ],
    }),
    defineField({
      name: 'OrganizationSchema',
      type: 'object',
      title: 'Uporządkowane dane organizacji',
      description: 'Więcej informacji o Schema: https://developers.google.com/search/docs/appearance/structured-data/organization?hl=pl',
      fields: OrganizationSchema,
      options: { collapsible: true, collapsed: true },
    })
  ],
  preview: {
    prepare: () => ({
      title: 'Globalne ustawienia',
    })
  }
});