import Script from 'next/script';

export function GaGewaerLaunch() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-978095518" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-978095518');
        `,
      }} />
    </>
  );
}
