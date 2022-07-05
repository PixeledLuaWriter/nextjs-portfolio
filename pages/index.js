import Head from 'next/head'

export default function Home() {
  return (
    <div className="transition-colors ease-in-out space-y-14 lg:space-y-24">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet='utf-8' />
        <meta property="og:title" content='Main Homepage Of My Portfolio' />
        <meta name='theme-color' content='#000000' />
        <meta property='og:description' content='A portfolio of projects' />
        <meta property='og:image' content="https://www.pixeledluawriter.ml/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPixeledLuaWriter.6d457aaa.jpg&w=256&q=75" />
        <meta property='twitter:card' content='summary_large_image' />
      </Head>

      <div className="transition-colors ease-in-out max-w-4xl mx-auto mt-16 antialiased">
        <div className="transition-colors ease-in-out lg:px-4 lg:mt-12 ">
          <h1 className="transition-colors ease-in-out text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey there, Welcome To My Portfolio, Hope you'll enjoy the show for
                        the specialties that this brings
          </h1>
        </div>
      </div>
    </div>
  )
}
