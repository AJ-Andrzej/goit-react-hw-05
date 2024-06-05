import { getTrendingMovies } from '../../api'
import {useEffect, useState} from 'react'

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
        console.log(movies);
    }, []);

    
    return (
          <p>Homepage</p>
      )
  }


