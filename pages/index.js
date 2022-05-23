import styles from "../styles/Home.module.css"
import Head from "next/head"

import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          commodi voluptas doloremque debitis incidunt error vitae explicabo
          assumenda nisi nesciunt illo, unde pariatur atque doloribus, ipsa
          quisquam similique qui eaque?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas</a>
        </Link>
      </div>
    </div>
  )
}
