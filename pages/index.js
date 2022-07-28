import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>WeHoop</title>
        <meta name="description" content="A Basetball site" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1>Hello {session && session.user.name}</h1>
        {session && <Button onClick={signOut}>Log out</Button>}
        {!session && <Button onClick={signIn}>Log in</Button>}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
