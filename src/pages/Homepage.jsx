import { useEffect, useState } from "react"

export default function Hompepage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:3005/api/v1/movies')

            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">

                    {
                        movies.map(movie => (
                            <div className="col" key={`movie-${movie.id}`}>
                                <div className="card">
                                    <div className="card-header">
                                        <h2>{movie.title}</h2>
                                    </div>
                                    <div className="card-body">
                                        <h5>{movie.director}</h5>
                                        <p>{movie.abstract}</p>


                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </>


    )
}