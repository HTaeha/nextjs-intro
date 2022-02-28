import { useRouter } from "next/router"

const Detail = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div>Detail</div>
    )
}
export default Detail