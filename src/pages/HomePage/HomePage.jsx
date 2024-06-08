import { getTrendingMovies } from '../../api'
import { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import css from './HomePage.module.css'


export default function HomePage() {
    const [movies, setMovies] = useState([])
    
        useEffect(() => {

        async function fethMovies() {
            try {
                const dataMovies = await getTrendingMovies()
                setMovies(dataMovies.results)
            }
            catch (err){
            console.log(err);
        } 
        }
        fethMovies()
       
    }, []);

    
    return (
        <>
            <h1 className={css.title}>Trending Movies</h1>
            <MovieList movies={movies} />
        </>
        
      )
  }


