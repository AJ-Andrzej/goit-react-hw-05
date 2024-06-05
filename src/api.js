import axios from 'axios'

const apiKey ='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Njk4NWJmMjk0OWY5ZTk5MGNhNDAzY2VkNTY0ZTQyNCIsInN1YiI6IjY2NjA4ZDY2MWY0ZGFhYzk1YWYyNjNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03vrmLznUoCSJVbHN5ueF9r4HYhMdl85w7-VDWDU8vY'
axios.defaults.baseURL = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

export const getTrendingMovies = async () => {
    const response = await axios.get("", {
        headers: {
            accept: 'application/json',
            Authorization: `${apiKey}`,
  }
    })
    console.log(response.data.results);
    return response.data
    
} 


