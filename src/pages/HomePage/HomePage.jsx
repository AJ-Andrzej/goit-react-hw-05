import { getTrendingMovies } from '../../api'
import { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'


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
        <MovieList movies={movies} />
      )
  }


