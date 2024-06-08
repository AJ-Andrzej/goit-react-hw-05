import { useEffect, useState } from 'react'
import { useParams} from "react-router-dom";
import css from './MovieCast.module.css'
import {getMoviesCast} from '../../api'

export default function MovieCast() {
    const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'

    const [cast, setCast] = useState([]);
    const { movieId } = useParams()

    useEffect(() => {

    async function fethCast() {
            try {
                const dataCast = await getMoviesCast(movieId)
                setCast(dataCast.cast)
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
                    <img
                        src={
                            profile_path ?
                                `https://image.tmdb.org/t/p/w185${profile_path}`
                                : defaultImg
                        }
                        alt={`${name} photo`} />
                    <p>{name}</p>
                    <p><i>Character:</i> {character}</p>
                </li>
            )
               

            )}
        </ul>
    )
}
