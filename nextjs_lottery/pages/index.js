// import ManualHeader from "../components/ManualHeader"
import Meta from "../components/Meta"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Meta />
            {/* <ManualHeader /> */}
            <Header />
            <LotteryEntrance />
        </div>
    )
}
