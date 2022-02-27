import NavBar from "./NavBar"
import Head from "next/head"
import { useRouter } from 'next/router'

const pathObj = {
    "/": "Home",
    "/about": "About"
}
export default function Layout({ children }) {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{pathObj[router.pathname]} | Next movies</title>
            </Head>
            <NavBar />
            <div>{children}</div>
        </>
    )
}