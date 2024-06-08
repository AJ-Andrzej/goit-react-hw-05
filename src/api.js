import axios from 'axios'

const apiKey ='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Njk4NWJmMjk0OWY5ZTk5MGNhNDAzY2VkNTY0ZTQyNCIsInN1YiI6IjY2NjA4ZDY2MWY0ZGFhYzk1YWYyNjNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03vrmLznUoCSJVbHN5ueF9r4HYhMdl85w7-VDWDU8vY'


export const getTrendingMovies = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US", {
        headers: {
            accept: 'application/json',
            Authorization: `${apiKey}`,
  }
    })
    return response.data
    
} 

export const getgMovieById = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
            accept: 'application/json',
            Authorization: `${apiKey}`,
  }
    })
    return response.data
}

export const getMoviesCast = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        headers: {
            accept: 'application/json',
            Authorization: `${apiKey}`,
  }
    })
    return response.data
}


