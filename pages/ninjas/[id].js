import { useRouter } from "next/router"

const Details = ({ ninja }) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <h1>Ninja Details</h1>
      <h2>{ninja.name}</h2>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  )
}

export default Details

export async function getStaticProps({ params }) {
  const req = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )
  const data = await req.json()

  return {
    props: { ninja: data }
  }
}

export async function getStaticPaths() {
  const req = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await req.json()

  const paths = data.map((ninja) => {
    return { params: { id: ninja.id.toString() } }
  })

  return {
    paths,
    fallback: false
  }
}
