import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Piyaphon Page</title>
      </Head>
      <h1>Piyaphon Page</h1>
      <p>This is sample page.</p>
      <Link href="/about">About</Link>
    </>
  )
}
