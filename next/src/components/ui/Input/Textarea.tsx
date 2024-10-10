import { forwardRef } from 'react';

const Textarea = forwardRef((props, ref) => {
  const handleExpand = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = '26px';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <textarea
      onInput={handleExpand}
      ref={ref as React.Ref<HTMLTextAreaElement>}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
