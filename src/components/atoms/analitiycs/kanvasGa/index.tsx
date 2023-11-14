import Script from 'next/script';

export function GaKanvas() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-1DHVH4C8PZ" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-1DHVH4C8PZ');
        `,
      }} />
    </>
  );
}
