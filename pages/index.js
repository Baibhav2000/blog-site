import Head from "next/head"
import styles from '@/styles/Home.module.css'
import { useState } from "react"
import { useRouter } from "next/router";

function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <p>BlogIt</p>
            </div>
                <button className={styles.btn}>Sign In</button>
        </header>
    )
}

function Main(){
    const [visible, setVisible] = useState(false);
    const router = useRouter();
    function handleHover(){
        setVisible(visible => !visible);
    }

    function handleClick(){
        router.push('/register');
    }

    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <p>New here?</p>
                <button className={styles.btn} onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleClick}>
                    Get Started {visible && (<span>&#8594;</span>)}
                </button>
            </div>
        </main>
    )
}

function Footer(){
    const currYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <p>Copyright @ {currYear}</p>
        </footer>
    )
}

export default function Home() {
  return (
    <>
        <Head>
            <title>BlogIt</title>
            <meta name="description" content="A simple Blog site built on Next.js"></meta>
        </Head>
        <div className={styles.container}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    </>
  )
}
