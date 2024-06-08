import { useEffect, useState } from 'react'
import { useParams} from "react-router-dom";
import css from './MovieCast.module.css'
import {getMoviesCast} from '../../api'

export default function MovieCast() {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams()

    useEffect(() => {

    async function fethCast() {
            try {
                const dataCast = await getMoviesCast(movieId)
                setCast(dataCast.cast)
                console.log(dataCast.cast);
            }
            catch (err){
            console.log(err);
        } 
        }
        fethCast()
        
       
    }, [movieId]);

    return (
         <ul className={css.wrapper}>
            {cast.map(({cast_id, name, profile_path, character}) => (
                 <li key={cast_id} className={css.card}>
                    <img src={`https://image.tmdb.org/t/p/w185${profile_path}`} alt={`${name} photo`} />
                    <p>{name}</p>
                    <p><i>Character:</i> {character}</p>
                </li>
            )
               

            )}
        </ul>
    )
}
