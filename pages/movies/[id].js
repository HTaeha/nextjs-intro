import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Detail = () => {
    const router = useRouter()
    const [data, setData] = useState()
    useEffect(() => {
        console.log(router)
    }, [])

    const getData = async () => {
        fetch(`/movies/`)
    }

    return (
        <div>
            <h4>{router.query.title || "Loading..."}</h4>
        </div>
    )
}
export default Detail