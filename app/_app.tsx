import 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Component } from "react"
import { AppProps } from 'next/app'

const App = ({Component, pageProps}: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} /> 
    </ChakraProvider>
  )
}

export default App