'use client';
import { useEffect, useState } from 'react';
import { DOMAIN } from '@/global/constants';
import CustomLink from '@/components/ui/CustomLink';

type ShareLinkTypes = {
  title?: string;
  description?: string;
};

export default function ShareLink({ title = '', description = '' }: ShareLinkTypes) {
  const [shareUrl, setShareUrl] = useState(DOMAIN);

  useEffect(() => {
    typeof window !== 'undefined' && setShareUrl(`${window.location.href.split('?')[0].split('#')[0]}?feature=share`);
  }, []);

  const handleShare = async () => {
    try {
      await navigator.share({
        title,
        text: description,
        url: shareUrl,
      });
    } catch {
      await navigator.clipboard.writeText(shareUrl);
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
