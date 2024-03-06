import MovieDetails from "../pages/MovieDetails";
import Home from "../pages/Home";
import {Routes, Route} from 'react-router-dom';

function MainRoutes()
{
     return (
         <Routes>
            <Route path ='/' element = {<Home />}></Route>
            <Route path = '/movie/:id' element = {<MovieDetails></MovieDetails>}></Route>
         </Routes>
     );
}

export default MainRoutes;