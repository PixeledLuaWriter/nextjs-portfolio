import Head from 'next/head'
import React from 'react'


function hobbies() {
  return (
    <div className="transition-colors container px-4 mx-auto">
        <Head>
            <title>Hobbies</title>
            <link rel="icon" href="/favicon.ico" />
            <meta charSet='utf-8' />
            <meta property="og:title" content='The Hobbies Section Of My Portfolio' />
            <meta name='theme-color' content='#000000' />
            <meta property='og:description' content='What the portfolio is and why' />
            <meta property='og:image' content="https://www.pixeledluawriter.ml/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPixeledLuaWriter.6d457aaa.jpg&w=256&q=75" />
            <meta property='twitter:card' content='summary_large_image' />
        </Head>
        <div className="transition-colors ease-in-out lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
            <div className="transition-colors ease-in-out lg:px-4 lg:mt-12 ">
                What do i do?
                I like to play video games, listen to all kinds of music, and code in my free time.
            </div>
        </div>
    </div>
  )
}

export default hobbies