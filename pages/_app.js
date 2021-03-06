import '../styles/globals.css'
import Navigation from '../components/Navigation'
import { ThemeProvider } from 'next-themes';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
