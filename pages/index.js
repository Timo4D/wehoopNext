import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import { useSession, signIn, signOut } from "next-auth/react";
import CourtList from "../components/CourtList";
import logo from "../public/logo.png"

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>WeHoop</title>
        <meta name="description" content="A Basetball site" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.main}>
        {session && <h1>Hello {session.user.name}</h1>}
        <Image src={logo} alt="WeHoop logo"></Image>
        <CourtList/>
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}
