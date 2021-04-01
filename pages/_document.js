import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;

      try {
         ctx.renderPage = () =>
            originalRenderPage({
               enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
            });

         const initialProps = await Document.getInitialProps(ctx);
         return {
            ...initialProps,
            styles: (
               <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
               </>
            ),
         };
      } finally {
         sheet.seal();
      }
   }

   render() {
      return (
         <Html lang="en" dir="ltr">
            <Head>
               <meta
                  name="description"
                  content="where hav e u been if u haven't even bothered to use quarantina??? >:("
               />
               <link rel="favicon" href="/favicon.ico" />
               <link rel="shortcut icon" href="/favicon.ico" />

               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link
                  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                  rel="stylesheet"
               />
               <link
                  rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
                  integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
                  crossOrigin="anonymous"
               />
            </Head>
            <body>
               <Main />
               <NextScript />
               <style jsx global>{`
                  /* global style override */
                  #__next {
                     height: 100%;
                  }
               `}</style>
            </body>
         </Html>
      );
   }
}

export default MyDocument;
