import { useState, useEffect } from "react"

const API_KEY = "30657263908cb328da92f4be931f1e81"

export default function Home() {
    const [movies, setMovies] = useState()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const { results } = await response.json()
            setMovies(results)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="container">
            {!movies && <h4>Loading...</h4>}
            {movies?.map((data) => {
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