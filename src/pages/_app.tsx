import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'
import type { AppProps } from 'next/app'
// import '@/styles/globals.css'
import { useEffect } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.withCredentials = true

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'dark',
            fontFamily: 'Verdana, sans-serif',
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}
