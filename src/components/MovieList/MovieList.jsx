import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css'

export default function MovieList({ movies, location }) {
    return (
        <ul className={css.wrapper}>
            {movies.map(({id, title, poster_path}) => (
                <li key={id}>

                    <Link
                        to={`/movies/${id}`}
                        className={css.card}
                        state={location}
                    >
                        <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={`${title} poster`} />
                        <p>{title}</p>
                    </Link>
                </li>

            ))}
        </ul>
    )
}