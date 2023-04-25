import '../styles/globals.css'
import Navigation from '../components/Core/Navigation'
import { ThemeProvider } from 'next-themes';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
