import Script from 'next/script';

export function GaMc() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-H1MV1CDE8K" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-H1MV1CDE8K');
        `,
      }} />
    </>
  );
}
