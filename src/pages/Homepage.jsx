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
                    <div className="col">
                        <div className="card">
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}