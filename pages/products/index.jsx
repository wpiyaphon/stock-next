import Head from 'next/head'
import Link from 'next/link'

export default function Home({ products }) {

    function deleteProduct(id) {
        fetch(`http://localhost:3000/api/products/${id}`,
            {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                window.location.reload(false);
            })

    }

    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <h1>Products</h1>
            <table>
                <tbody>
                    {
                        products.map(product => {
                            return (
                                <tr key={product._id}>
                                    <td>
                                        <Link href={`/products/${product._id}`}>
                                            {product.title}
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/products/`)
    const products = await res.json()
    return { props: { products } }
}