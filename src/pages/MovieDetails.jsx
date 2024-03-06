import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieById } from "../apis/omdb";
import MovieCard from "../components/MovieCard/MovieCard";
import axios from "axios";
import './MovieDetails.css';





function MovieDetails()
{
     const {id} = useParams();
     const [movie, setMovie] = useState(null);

     async function downloadMovie()
     {
          const response = await axios.get(searchMovieById(id));
          setMovie(response.data);

     }

     useEffect(()=>{
            downloadMovie();
     },[id]);



      return (
          <div className="movie-details-wrapper">
             {movie && <MovieCard
                         Title={movie.Title}
                         Year={movie.Year}
                         Type={movie.Type}
                         id = {movie.imdbID}
                         Poster={movie.Poster}
                         />
               }

            {movie && <div className="movie-details">
                  
                      <div>
                         Plot: {movie.Plot};
                      </div>
                      <div>
                         Actors: {movie.Actors};
                      </div>
                      <div>
                         Genre: {movie.Genre.split(',').map((genre)=> {
                              return <span className="genre" key={genre}>{genre}</span>
                         })}
                      </div>
          </div>}
          </div>
      );
}

export default MovieDetails;