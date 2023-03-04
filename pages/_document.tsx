import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
    render() {
        return (
        <Html>
            <Head> 
            </Head>
            
            <body>
            <Script src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RnfsUY" />
                <Main />
                <NextScript />
            </body>
        </Html>
        ) 
    }
}
