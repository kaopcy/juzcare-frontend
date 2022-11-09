import { Html, Head, Main, NextScript } from 'next/document';

const _document = () => (
   <Html lang="en">
      <Head>
         <meta charSet="utf-8" />
         <meta name="description" content="" />
         <meta name="keywords" content="kmitl,report,foudue,traffic,cmkl,ladkrabang," />
         <meta name="author" content="Juzcare team." />
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

         <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
         />

         <script src="https://accounts.google.com/gsi/client" async defer />
         <script src="https://apis.google.com/js/api.js" async defer />
      </Head>
      <body>
         <Main />
         <NextScript />
      </body>
   </Html>
);

export default _document;
