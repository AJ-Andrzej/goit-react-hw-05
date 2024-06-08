import { useParams, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getgMovieById } from '../../api'
import css from './MovieDetailsPage.module.css'

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null)
    const { movieId } = useParams()
    
        useEffect(() => {

        async function fethMovie() {
            try {
                const movieInfo = await getgMovieById(movieId)
                setMovie(movieInfo)
            }
            catch (err){
            console.log(err);
        } 
        }
        fethMovie()
       
        }, [movieId]);
    
    
    
    
    return (
        <>
            {movie && <div className={css.info}>

            <div className={css.baseWrapper}>
                <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={`${movie.title} poster`} className={css.img}/>
                <div className={css.base}>
                    <h2 className={css.title}>{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
                    <p className={css.text}>User score: {movie.vote_average * 10}%</p>
                    <h3 className={css.subTitle}>Overview</h3>
                    <p className={css.text}>{movie.overview}</p>
                    <h3 className={css.subTitle}>Genres</h3>
                    <p className={css.text}>{movie.genres.map(genre => genre.name).join(' ')}</p>
                </div>         
            </div>
            <div className={css.additional}>
                <p className={css.text}>Additional infomation </p>
                <div className={css.link}>
                    <NavLink to="cast">Cast</NavLink>
                    <NavLink to="reviews">Reviews</NavLink>
                </div> 
                </div>
                <Outlet />
        </div>}
        </>
    )
}