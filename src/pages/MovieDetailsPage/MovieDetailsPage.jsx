import { useParams, NavLink, Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef,  Suspense} from 'react'
import { getgMovieById } from '../../api'
import css from './MovieDetailsPage.module.css'
import clsx from 'clsx'


const getLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.acitve)
}


export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null)
    const { movieId } = useParams()
    const location = useLocation()
    const backLinkRef = useRef(location.state ?? '/movies');
    
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

            <Link
                className={css.back}
                to={backLinkRef.current}
            >
                    Go Back
            </Link>
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
                <div className={css.nav}>
                    <NavLink className={getLinkClass} to="cast">Cast</NavLink>
                    <NavLink className={getLinkClass} to="reviews">Reviews</NavLink>
                </div> 
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                     <Outlet />
                </Suspense>
               
        </div>}
        </>
    )
}