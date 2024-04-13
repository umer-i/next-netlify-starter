import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Trader ( 20000 in funding) - Data scientist - drcglobal.org (100000 market cap) -   <code>umerbtc@protonmail.com</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
