import Head from "next/head";
import styles from '@/styles/Register.module.css';

export default function Register(){
    return (
        <>
            <Head>
                <title>BlogIt | Register</title>
            </Head>
            <div className={styles.container}>
                Create a new account
            </div>
        </>
    )
}