import { defineQuery } from 'next-sanity';
import type { ContactFormTypes, ContactQueryTypes } from './ContactForm.types';
import sanityFetch from '@/utils/sanity.fetch';

import Text from '@/components/ui/Text';
import CopyToClipboard from '@/components/ui/CopyToClipboard';
import Form from './_Form';

import styles from './ContactForm.module.scss';

export default async function ContactForm({ paragraph, topics }: ContactFormTypes) {
  const { email, privacyPolicy } = await query();

  return (
    <section className={`${styles['ContactForm']} max-width`}>
      <Text
        className={styles.intro}
        value={paragraph}
      />
      <div className={styles.wrapper}>
        <CopyToClipboard
          label='Do:'
          value={email}
          successMessage='E-mail skopiowany'
        />
        <Form
          topics={topics}
          email={email}
          privacyPolicyLink={privacyPolicy}
        />
      </div>
    </section>
  );
}

const query = async () => {
  const contactQuery = defineQuery(`
    *[_id == 'global'][0] {
      privacyPolicy,
      email
    }
  `);

  return await sanityFetch<ContactQueryTypes>({ query: contactQuery });
};
