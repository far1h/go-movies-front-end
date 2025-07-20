import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let movieList = [
            {
                id: 1,
                title: "Sample Movie",
                release_date: "2024-01-01",
                runtime: 120,
                mpaa_rating: "PG-13",
                description: "This is a sample movie description."
            },
            {
                id: 2,
                title: "Another Movie",
                release_date: "2024-02-01",
                runtime: 90,
                mpaa_rating: "R",
                description: "This is another sample movie description."
            },
            {
                id: 3,
                title: "Third Movie",
                release_date: "2024-03-01",
                runtime: 150,
                mpaa_rating: "G",
                description: "This is a third sample movie description."
            }
        ];
        setMovies(movieList);

    }, []);

    return (
        <div>
            <h2>Movies</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Runtime</th>
                        <th>MPAA Rating</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id}>
                            <td><Link to={`/movies/${movie.id}`}>{movie.title}</Link></td>
                            <td>{new Date(movie.release_date).toLocaleDateString()}</td>
                            <td>{movie.runtime} minutes</td>
                            <td>{movie.mpaa_rating}</td>
                            <td>{movie.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Movies;