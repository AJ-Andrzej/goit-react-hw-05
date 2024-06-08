import { useLocation, useSearchParams } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useEffect, useState } from 'react';
import { getFiltredMovies } from '../../api'
import MovieList from '../../components/MovieList/MovieList'

export default function MoviesPage() {
    const [searchParam, setSearchParam] = useSearchParams()
    const [movies, setMovies] = useState([])
    const userFilter = searchParam.get('query') ?? '';
    const location = useLocation()
    const addParams = newQuery => {
        searchParam.set('query', newQuery)
        setSearchParam(searchParam)
    }

    useEffect(() => {

            if (userFilter.trim() === "") return
            
            async function fethMovies() {
            try {
                const dataMovies = await getFiltredMovies(userFilter)
                setMovies(dataMovies.results)
            }
            catch (err){
            console.log(err);
        } 
        }
        fethMovies()
       
    }, [userFilter]);

    return (
        <>
            <SearchBar onSubmit={addParams} />
            <MovieList movies={movies} location={location} />
        </>
        
    )
}