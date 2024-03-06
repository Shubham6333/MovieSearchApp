import './home.css';
import MovieCard from '../components/MovieCard/MovieCard';
import useMovieList from '../hooks/useMovieList';


function Home()
{   
    const {movieList} = useMovieList('harry','dark');
     return (
        
        <div className="movie-card-wrapper">
           {movieList.map(movie => <MovieCard key = {movie.imdbID} id = {movie.imdbID} {... movie}></MovieCard>)}
        </div>
     );
}

export default Home;