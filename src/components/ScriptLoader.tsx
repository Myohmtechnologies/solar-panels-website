import Script from 'next/script';
import { useEffect } from 'react';

const ScriptLoader = () => {
  useEffect(() => {
    // Fonction pour détecter si l'utilisateur fait défiler
    const handleScroll = () => {
      if (!window.gtmLoaded && window.scrollY > 100) {
        loadGTM();
      }
      if (!window.fbLoaded && window.scrollY > 100) {
        loadFBPixel();
      }
    };

    // Ajouter l'écouteur d'événements
    window.addEventListener('scroll', handleScroll);

    // Nettoyer
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadGTM = () => {
    window.gtmLoaded = true;
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    script.strategy = 'afterInteractive';
    document.head.appendChild(script);
  };

  const loadFBPixel = () => {
    window.fbLoaded = true;
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    `;
    script.strategy = 'afterInteractive';
    document.head.appendChild(script);
  };

  return (
    <>
      <Script
        id="intersection-observer-polyfill"
        strategy="beforeInteractive"
      >
        {`
          if (!('IntersectionObserver' in window)) {
            document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\\/script>');
          }
        `}
      </Script>
    </>
  );
};

export default ScriptLoader;
