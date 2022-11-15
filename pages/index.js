//17:25
import Head from "next/head"
import Layout from "../components/layout"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>Smart Contract Lottery </title>
                <meta name="description" content="Our Smart Contract Lottery"></meta>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <Header></Header>
            <LotteryEntrance />
        </Layout>
    )
}
