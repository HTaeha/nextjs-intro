import Seo from "../../components/Seo"

const Detail = ({ results }) => {
    const [title] = results

    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    )
}
export default Detail

export const getServerSideProps = ({params:{params}}) => {
    return {
        props: {
            results: params,
        }
    }
}