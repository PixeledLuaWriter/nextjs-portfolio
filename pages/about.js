import AboutContent from "../components/layouts/About";
import Head from "next/head";

export default function AboutPage() {
    return (
        <div className="transition-colors container px-4 mx-auto">
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet='utf-8' />
                <meta property="og:title" content='The About Section Of My Portfolio' />
                <meta name='theme-color' content='#000000' />
                <meta property='og:description' content='What the portfolio is and why' />
                <meta property='og:image' content="https://www.pixeledluawriter.ml/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPixeledLuaWriter.6d457aaa.jpg&w=256&q=75" />
                <meta property='twitter:card' content='summary_large_image' />
            </Head>
            <AboutContent />
        </div>
    )
}
