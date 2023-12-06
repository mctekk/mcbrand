import Script from "next/script";

export function GaMc() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SD2MHZE8VC"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-SD2MHZE8VC');
        `,
        }}
      />
    </>
  );
}
