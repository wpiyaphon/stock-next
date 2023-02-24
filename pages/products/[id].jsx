import Head from 'next/head'
import Link from 'next/link'

export default function Product({ product }) {
    console.log('product 2', product)
    if (!product) return (
        <div>
            <p>Product not found</p>
            <Link href="/products">Back</Link>
        </div>
    );

    return (
        <>
            <Head>
                <title>{product.title}</title>
            </Head>
            <h1>{product.title}</h1>
            <p>Price: {product.price} Baht</p>
            <Link href="/products">Back</Link>
        </>
    )
}

export async function getServerSideProps({ params }) {
    console.debug('params', params)
    const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${params.id}`)
    const product = await res.json()
    console.debug('product 1', product)
    return { props: { product } }
}

