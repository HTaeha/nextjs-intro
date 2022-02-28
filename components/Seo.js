import Head from "next/head"

const Seo = ({title}) => {
    return (
            <Head>
                <title>{title} | Next movies</title>
            </Head>
    )
}
export default Seo