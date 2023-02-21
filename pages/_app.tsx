import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';


export default function App({ Component, pageProps }: AppProps) {
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return(
    <ThemeProvider theme={darkTheme}>
      <RecoilRoot>  
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  )
}
