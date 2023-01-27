import {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default function Document()
{
    return (
        <Html lang="fr">
            <Head>
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="theme-color" content="#17a2b8" />

                {/* Google Web Fonts */}
                {/* TODO: preconnect? */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Handlee&family=Nunito&display=swap" rel="stylesheet" />

                {/* TODO: Font Awesome */}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}