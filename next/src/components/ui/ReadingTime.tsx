import { type PortableTextBlock, toPlainText } from 'next-sanity';

export type ReadingTimeTypes = {
  contents?: (PortableTextBlock[] | null)[];
  headings?: (PortableTextBlock[] | null)[];
  listContents?: PortableTextBlock[][];
  listHeadings?: PortableTextBlock[][];
};

export const ReadingTime_Query = `
  "contents": content[].content,
  "headings": content[].heading,
  "listContents": content[_type == "ContentSectionWithHeader"].content,
  "listHeadings": content[_type == "ContentSectionWithHeader"].heading,
`;

const convertToPlainText = ({ contents, headings, listContents, listHeadings }: ReadingTimeTypes): string => {
  return [contents, headings, listContents, listHeadings]
    .map(blocks => blocks?.map(block => (block ? toPlainText(block) : '')).join(' ') || '')
    .join(' ');
};

const readingTime = (text: string): number => {
  const countWords = (text: string): number => {
    const trimmedText = text.trim();
    if (trimmedText === '') return 0;
    const words = trimmedText.split(/\s+/);
    return words.length;
  };
  const words = countWords(text);
  const averageReadingSpeedWordsPerMinute = 200;
  return Math.ceil(words / averageReadingSpeedWordsPerMinute);
};

export default function ReadingTime({ className = '', ...content }: ReadingTimeTypes & { className?: string }) {
  const text = convertToPlainText(content);
  return <span className={className}>{readingTime(text)} min czytania</span>;
}
