import Head from 'next/head'
import About from "../components/About"

export default function Home() {
  return (
    <div className="transition-colors ease-in-out space-y-14 lg:space-y-24">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="transition-colors ease-in-out max-w-4xl mx-auto mt-16 antialiased">
        <About/>
      </main>
    </div>
  )
}
