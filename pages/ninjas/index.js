import Head from "next/head"
import styles from "../../styles/Ninjas.module.css"
import Link from "next/link"

//we want to make sure that it doesn't block other code
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  return {
    props: {
      ninjas: data
    }
  }
}

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List</title>
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Ninjas
