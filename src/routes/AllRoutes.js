import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MovieDetails, MovieList, PageNotFound, Search } from '../pages'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MovieList title="Your Guide to Great Movies"  apipath="movie/now_playing"/>}/>
        <Route path='movies/popular' element={<MovieList title="Popular Movies" apipath="movie/popular"/>}/>
        <Route path='movies/top' element={<MovieList title="Top Rated Movies" apipath="movie/top_rated"/>}/>
        <Route path='movies/upcoming' element={<MovieList title="UpComing Movies" apipath="movie/upcoming"/>}/>

        <Route path='movie/:id' element={<MovieDetails />}/>
        <Route path='search' element={<Search apipath='search/movie' />}/>
        <Route path='*' element={<PageNotFound />}/>



      </Routes>
    </div>
  )
}

export default AllRoutes