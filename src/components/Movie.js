import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movieId, setMovieId] = useState({});
    let { id } = useParams();

    useEffect(() => {
        let myMovie = {
            id: 1,
                title: "Sample Movie",
                release_date: "2024-01-01",
                runtime: 120,
                mpaa_rating: "PG-13",
                description: "This is a sample movie description."
        }
        setMovieId(myMovie);
    }, [id]);
    return (
        <>
            <h2>Movie: {movieId.title}</h2>
            <small><em>{movieId.release_date}, {movieId.runtime} min, Rated {movieId.mpaa_rating}</em></small>
            <hr />
            <p>{movieId.description}</p>
        </>
    )
}

export default Movie;