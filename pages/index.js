import Head from 'next/head'
import Link from 'next/link'
import About from "../components/About";

export default function Home() {
  return (
    <div className="transition-colors ease-in-out space-y-14 lg:space-y-24">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="transition-colors ease-in-out max-w-4xl mx-auto mt-16 antialiased">
        <About/>
        <Link href={"/github"}>
          <a className='rounded-[6px] bg-gradient-to-br from-amber-700 via-slate-900 to-orange-500'>
            Click Here To View The Repositories
          </a>
        </Link>
      </main>
    </div>
  )
}