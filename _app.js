import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  
  return (
    <MoralisProvider
      serverUrl= 'https://8oyk5t00zoyz.usemoralis.com:2053/server'
      appId= 'l9iAGdkJCtFrMAlp8ot12XVtgbeXiwul9iKhgZD9'
      
    >
    <Component {...pageProps} />

        </MoralisProvider >
        
  )
}
export default MyApp

