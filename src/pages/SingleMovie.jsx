import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SingleMovie() {
    const [movie, setMovie] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3005/api/v1/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
            })
    }, [id])


    if (!movie) {
        return <p>Loading...</p>
    }
    return (
        <>
            <main>


                <div className="p-5 mb-4 bg-light">
                    <div className="container-fluid py-5 d-flex justify-content-center">
                        <div className="row">
                            <div className="col-8">
                                <h1 className="display-5 fw-bold">{movie?.title}</h1>
                                <p className="col-md-8 fs-4">
                                    {movie?.abstract}
                                </p>

                                <span>Director: {movie.director}</span>
                            </div>

                            <img className="col-4" src={`http://localhost:3005/images/${movie?.image}`} alt="" style={{ width: '250px' }} />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {movie.review.map((review, index) => (
                            <div key={`review-${index}`} className="col">
                                <div className="card">
                                    <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                        <div className="username">
                                            <h5>Username</h5>
                                            <div>{review.name}</div>
                                        </div>

                                        <div className="vote">
                                            <h5>Vote</h5>
                                            <div>{(() => {
                                                const stars = []
                                                for (let i = 1; i <= 5; i++) {
                                                    stars.push(
                                                        <i
                                                            key={i}
                                                            className={`bi ${i <= review.vote ? 'bi-star-fill text-warning' : 'bi-star text-muted'}`}
                                                        ></i>
                                                    )
                                                }
                                                return <div>{stars}</div>
                                            })()}</div>
                                        </div>

                                    </div>
                                    <div className="card-body">
                                        <p>{review.text}</p>
                                    </div>
                                    <div className="card-footer">
                                        <div>Reviewed on: {review.created_at}</div>
                                    </div>
                                </div>
                            </div>
                        ))

                        }

                    </div>
                </div>





            </main>
        </>
    )
}