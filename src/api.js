import axios from 'axios'

const apiKey ='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Njk4NWJmMjk0OWY5ZTk5MGNhNDAzY2VkNTY0ZTQyNCIsInN1YiI6IjY2NjA4ZDY2MWY0ZGFhYzk1YWYyNjNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03vrmLznUoCSJVbHN5ueF9r4HYhMdl85w7-VDWDU8vY'
const baseUrl = 'https://api.themoviedb.org/3'

export const getTrendingMovies = async () => {
    const response = await axios.get(`${baseUrl}/trending/movie/day?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: `${apiKey}`,
  }
    })
    return response.data
    
} 

export const getgMovieById = async (id) => {
    const response = await axios.get(`${baseUrl}/movie/${id}`, {
        headers: {
            accept: 'application/json',
            Authorization: `${apiKey}`,
  }
    })
    return response.data
}

export const getMoviesCast = async (id) => {
    const response = await axios.get(`${baseUrl}/movie/${id}/credits`, {
        headers: {
            accept: 'application/json',
            Authorization: `${apiKey}`,
  }
    })
    return response.data
}

export const getMoviesReviews = async (id) => {
    const response = await axios.get(`${baseUrl}/movie/${id}/reviews`, {
        headers: {
            accept: 'application/json',
            Authorization: `${apiKey}`,
  }
    })

    return response.data
}

export const getFiltredMovies = async (filter) => {
    const response = await axios.get(`${baseUrl}/search/movie`, {
        params: { query: `${filter}` },
        headers: {
            accept: 'application/json',
            Authorization: `${apiKey}`,
  }
    })
    return response.data
}
