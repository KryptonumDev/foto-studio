import type { FaqSectionTypes } from './FaqSection.types';

import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import AccordionList from './_AccordionList';

import styles from './FaqSection.module.scss';

export default function FaqSection({ index, heading, list }: FaqSectionTypes) {
  const data = list.map(({ _id, question, answer }) => ({
    _id,
    question: <h3 className='small-text'>{question}</h3>,
    answer: <Text value={answer} />,
  }));

  return (
    <section className={`${styles['FaqSection']} max-width mb`}>
      <header>
        <Heading
          value={heading}
          tag={index === 0 ? 'h1' : 'h2'}
          className='medium-text'
        />
      </header>
      <AccordionList
        list={data}
        icon={ArrowIcon}
      />
    </section>
  );
}

const ArrowIcon = (
  <svg
    width='11'
    height='12'
    viewBox='0 0 11 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.15362 9.40202L9.83084 5.72479L10.5379 6.4319L6.01035 10.9595L5.65679 11.3131L5.30324 10.9595L0.463209 6.11947L1.17032 5.41236L5.15362 9.39567L5.15736 0.499837L6.15736 0.500257L6.15362 9.40202Z'
    />
  </svg>
);
