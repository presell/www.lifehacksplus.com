import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        async
                        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RnfsUY"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
