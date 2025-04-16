import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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

            <main>

                <div className="container mt-5">

                    <h1>MOVIES</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mt-2">

                        {
                            movies.map(movie => (
                                <div className="col" key={`movie-${movie.id}`}>
                                    <Link to={`/movies/${movie.id}`} >

                                        <div className="card">
                                            <div className="card-header">
                                                <img className="card-img-top" src={`http://localhost:3005/images/${movie.image}`} alt={movie.title} />

                                            </div>

                                            <div className="card-body">
                                                <h2>{movie.title}</h2>
                                                <h5>{movie.director}</h5>
                                                <p>{movie.abstract}</p>


                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            ))
                        }


                    </div>
                </div>

            </main>

        </>


    )
}