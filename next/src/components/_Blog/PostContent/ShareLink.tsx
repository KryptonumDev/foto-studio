'use client';
import CustomLink from '@/components/ui/CustomLink';

type ShareLinkTypes = {
  title?: string;
  description?: string;
};

export default function ShareLink({ title = '', description = '' }: ShareLinkTypes) {
  const shareData = {
    title,
    text: description,
    url:
      typeof window !== 'undefined'
        ? window.location.href.includes('#')
          ? `${window.location.href.split('#')[0]}?feature=share`
          : `${window.location.href.split('?')[0]}?feature=share`
        : 'fotostudio.pl',
  };

  const handleShare = async () => {
    try {
      await navigator.share(shareData);
    } catch {
      await navigator.clipboard.writeText(shareData.url);
      alert('Skopiowano link');
    }
  };

  return (
    <CustomLink
      onClick={handleShare}
      className='small-text'
      text='Udostępnij artykuł'
    />
  );
}
