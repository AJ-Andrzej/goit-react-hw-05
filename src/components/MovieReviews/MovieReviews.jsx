import { useEffect, useState } from 'react'
import css from './MovieReviews.module.css'
import { useParams } from "react-router-dom";
import { getMoviesReviews } from '../../api'



export default function MovieReviews() {

    const [reviews, setReviews] = useState([])
    const { movieId } = useParams()
    useEffect(() => {
         async function fethCast() {
            try {
                const dataReviews = await getMoviesReviews(movieId)
                setReviews(dataReviews.results);
            }
            catch (err){
            console.log(err);
        } 
        }
        fethCast()
    
    }, [movieId]);

    return (
        <div className={css.wrapper}>
             {
            reviews.length > 0 ? (
                    <ul className={css.list}>
                        {reviews.map(({id, author, content}) => (
                            <li key={id} className={css.item}>
                                <p><b>Author:</b> <i>{author}</i></p>
                                <p>{content}</p>
                            </li>
                        ))}
                </ul>
        ) :  (
        <p className={css.text}>We don't have any reviews for this movie.</p>
      )}
    </div>
       
      
    )
}
<p className={css.text}>We don't have any reviews for this movie.</p>    