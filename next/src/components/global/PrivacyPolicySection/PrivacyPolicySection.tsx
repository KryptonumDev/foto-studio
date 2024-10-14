import type { PrivacyPolicySectionTypes } from './PrivacyPolicySection.types';
import Heading from '@/components/ui/Heading';
import PrivacyPolicyContent from './_PrivacyPolicyContent';

import styles from './PrivacyPolicySection.module.scss';

export default function PrivacyPolicySection({ heading, list }: PrivacyPolicySectionTypes) {
  return (
    <section className={`${styles['PrivacyPolicySection']} max-width mb`}>
      <header>
        <Heading
          tag='h1'
          value={heading}
          className='large-text'
        />
      </header>
      <PrivacyPolicyContent list={list} />
    </section>
  );
}
