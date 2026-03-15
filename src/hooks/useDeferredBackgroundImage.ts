import { useState, useEffect } from 'react';

/**
 * Load background image in the background (via Image()) so decode doesn't block main thread.
 * Returns { ready, url } - use url for backgroundImage only when ready.
 * Show placeholder (e.g. gradient) until ready to avoid lag from high-res images.
 */
export function useDeferredBackgroundImage(imageUrl: string): { ready: boolean; url: string } {
  const [ready, setReady] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!imageUrl) return;
    const fullUrl = imageUrl.startsWith('http') ? imageUrl : `${process.env.PUBLIC_URL || ''}${imageUrl}`;
    const img = new Image();
    img.onload = () => {
      setUrl(fullUrl);
      setReady(true);
    };
    img.onerror = () => setReady(true); // still set ready so we don't hang
    img.src = fullUrl;
    return () => {
      img.src = '';
    };
  }, [imageUrl]);

  return { ready, url };
}
