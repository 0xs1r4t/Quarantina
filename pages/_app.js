import GlobalStyles from "@styles/globals.js";

function MyApp({ Component, pageProps }) {
   return (
      <>
         <GlobalStyles />
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
