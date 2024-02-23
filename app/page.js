import Link from "next/link";
// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (

    <main>
      <h1>
        kawagami
      </h1>
      <p>
        <Link href="/meals">meals</Link>
      </p>
      <p>
        <Link href="/community">community</Link>
      </p>
    </main>
  );
}
