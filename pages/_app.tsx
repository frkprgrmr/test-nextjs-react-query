import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  Hydrate,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>

        <ReactQueryDevtools
          initialIsOpen={false}
          panelPosition='right'
          position='bottom-right'
        />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
