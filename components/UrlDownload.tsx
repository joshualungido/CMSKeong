import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'o5houilb',  // Replace with your actual project ID
  dataset: 'production', // Replace with your dataset
  useCdn: true,
});

const UrlDownload: React.FC<{ fileRef: string }> = ({ fileRef }) => {
  const [link, setLink] = useState<string | null>(null);

  useEffect(() => {
    if (fileRef) {
      client
        .fetch(`*[_id == $id][0].url`, { id: fileRef })
        .then((url: string) => setLink(url))
        .catch((err) => console.error('Error fetching file URL:', err));
    }
  }, [fileRef]);

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      Download file
    </a>
  ) : (
    <span>Loading...</span>
  );
};

export default UrlDownload;
