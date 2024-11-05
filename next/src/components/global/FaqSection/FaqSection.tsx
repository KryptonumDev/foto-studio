import { toPlainText } from 'next-sanity';
import FaqSchema from '@/global/Schema/Faq';
import type { FaqSectionTypes } from './FaqSection.types';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import AccordionList from './_AccordionList';
import styles from './FaqSection.module.scss';

export default function FaqSection({ index, heading, list }: FaqSectionTypes) {
  const QuestionTag = index === 0 ? 'h2' : 'h3';

  const data = list.map(({ _id, question, answer }) => ({
    _id,
    question: <QuestionTag className='small-text'>{question}</QuestionTag>,
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
        ArrowIcon={<ArrowIcon />}
      />
      <FaqSchema data={list.map(({ question, answer }) => ({ question, answer: toPlainText(answer) }))} />
    </section>
  );
}

const ArrowIcon = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={12}
    fill='none'
    viewBox='0 0 11 12'
    {...props}
  >
    <path d='m6.15362 9.40202 3.67722-3.67723.70706.70711-4.52755 4.5276-.35356.3536-.35355-.3536L.463209 6.11947l.707111-.70711 3.9833 3.98331.00374-8.895833 1 .00042-.00374 8.901763Z' />
  </svg>
);
