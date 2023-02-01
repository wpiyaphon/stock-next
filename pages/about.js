import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <h1>About Page</h1>
      <p>
      This is about page.
      </p>
      <Link href="/">Home</Link>
    </>
  )
}
