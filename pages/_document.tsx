import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body className="bg-slate-900 px-5">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument