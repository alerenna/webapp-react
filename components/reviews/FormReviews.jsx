import { useState } from "react"

export default function FormReviews({ movieId }) {

    const api_url = `http://localhost:3005/api/v1/movies/${movieId}/reviews`

    const initialFormData = {
        username: "Anonymous",
        vote: 0,
        review: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleFormSubmit(e) {
        e.preventDefault()


        fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.username,
                text: formData.review,
                vote: formData.vote,
            })
        })

            .then(res => res.json())
            .then(data => {
                console.log('Risposta al server', data);
                setFormData(initialFormData)

            })
            .catch(err => console.log('Errore nella fetch', err))
    }


    return (
        <>
            <div className="add-review">
                <h3 className="mb-3">Add your review</h3>

                <form onSubmit={handleFormSubmit} className="mb-3">

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            id="username"
                            aria-describedby="helpId"
                            placeholder="Anonymous"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="vote" className="form-label">Vote</label>
                        <input
                            type="number"
                            className="form-control"
                            min={1}
                            max={5}
                            name="vote"
                            id="vote"
                            aria-describedby="helpId"
                            placeholder="1"
                            value={formData.vote || ''}
                            onChange={(e) => setFormData({ ...formData, vote: parseInt(e.target.value) || '' })}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="review" className="form-label">Review</label>
                        <input
                            type="text"
                            className="form-control"
                            name="review"
                            id="review"
                            aria-describedby="helpId"
                            placeholder="You review here"
                            value={formData.review}
                            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit review
                    </button>


                </form>
            </div>




        </>
    )
}