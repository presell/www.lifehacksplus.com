import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    render(): JSX.Element {
        return (
        <Html>
            <Head> 
<script src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RnfsUY"></script>
            </Head>
            
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        ) 
    }
}
