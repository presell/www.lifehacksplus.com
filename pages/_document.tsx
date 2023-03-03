import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    render(): JSX.Element {
        return (
        <Html>
            <Head> 
            </Head>
            
            <body>
            <script src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RnfsUY"></script>

                <Main />
                <NextScript />
            </body>
        </Html>
        ) 
    }
}
