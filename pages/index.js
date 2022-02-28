export default function Home({ results }) {
    return (
        <div className="container">
            {results?.map((data) => {
                const title = data.original_title
                return (
                    <div className="movie" key={data.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
                        <h4>{title}</h4>
                    </div>
                )
            })}
            <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
        </div>
    )
}

export const getServerSideProps = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/movies")
        const { results } = await response.json()

        return {
            props: {
                results,
            }
        }
    } catch (e) {
        console.error(e)
        return {
            props: {
                results: null,
            }
        }
    }
}