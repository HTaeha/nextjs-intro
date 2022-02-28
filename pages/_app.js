import Error from "../components/Error";
import Layout from "../components/Layout";
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            {pageProps.results === null ? <Error /> :
                <Component {...pageProps} />
            }
        </Layout>
    )
}