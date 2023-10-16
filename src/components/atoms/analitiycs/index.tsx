import Script from 'next/script';


export function GA () {
    return (
        <>
            <Script src='https://www.googletagmanager.com/gtag/js?id=G-YXW1Y5B8CM' strategy="afterInteractive"></Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YXW1Y5B8CM');
        `}
            </Script>
        </>
    )
}
