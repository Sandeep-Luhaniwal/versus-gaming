// import Header from '@/components/common/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-black'>
        {/* <Header /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
