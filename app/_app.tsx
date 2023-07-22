import 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from 'next/app'
import theme from './theme'

const App = ({Component, pageProps}: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} /> 
    </ChakraProvider>
  )
}

export default App