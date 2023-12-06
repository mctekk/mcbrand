import Script from 'next/script';

export function GaGewaer() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-34587T664X" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-34587T664X');
        `,
      }} />
    </>
  );
}
