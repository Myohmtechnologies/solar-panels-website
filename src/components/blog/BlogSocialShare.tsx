'use client';

import { ShareIcon } from '@heroicons/react/24/outline';

interface BlogSocialShareProps {
  title: string;
  url: string;
}

const BlogSocialShare = ({ title, url }: BlogSocialShareProps) => {
  const shareData = {
    title: title,
    url: typeof window !== 'undefined' ? window.location.href : url,
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback : copier le lien dans le presse-papier
      navigator.clipboard.writeText(shareData.url);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
    >
      <ShareIcon className="h-5 w-5" />
      <span>Partager</span>
    </button>
  );
};

export default BlogSocialShare;
