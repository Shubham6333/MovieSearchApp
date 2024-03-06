import { useRef, useState } from 'react';
import './Navbar.css';
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';
import { Link, useNavigate } from 'react-router-dom';

function Navbar()
{   
     const resultListRef = useRef(null);
     const [searchTerm, setSearchTerm] = useState('');
     const {movieList} = useMovieList(!searchTerm ? 'mission impossible': searchTerm);
    const navigator = useNavigate();
     function handleAutoCompleteClick(e, movieImdbId)
     {
           navigator(`/movie/${movieImdbId}`);
     }

    return (
       <div className = "navbar-wrapper">
            <div className='movie-base-title'><Link to = "/">Movie Base</Link></div>
            <div className = "search-bar">
                <input 
                     type = "text" 
                      id = "movie-search-input" 
                       onFocus={()=>{
                         resultListRef.current.style.display='block';
                      }}
                      onBlur={()=>{
                           resultListRef.current.style.display='none';
                      }}

                      onChange={useDebounce((e)=>{
                           setSearchTerm(e.target.value);
                      })}
                   placeholder='what movie you are thinking about...'>
                </input>


             <div id="result-list" ref={resultListRef}>
               
               
                  {movieList.length > 0 && movieList.map(movie => <div onMouseDown={(e) =>handleAutoCompleteClick(e, movie.imdbID)}  key = {movie.imdbID} className='autocomplete-result'>{movie.Title}</div>)}

            </div>

            </div>
            

            <div>
                Theme
            </div>
       </div>
    );
}

export default Navbar