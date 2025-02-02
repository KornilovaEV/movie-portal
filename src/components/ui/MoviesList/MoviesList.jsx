import { Pagination, Stack } from '@mui/material';
import React from 'react';
import MoviesCard from '../MoviesCard';
import PropTypes from 'prop-types';
export default function MoviesList({movies, totalPages, page, setPage}) {
  return (
    <>
      <Stack direction='row' justifyContent='center' flexWrap='wrap'>
        {movies.map(movie => (
          <MoviesCard key={movie.kinopoiskId} movie={movie}/>
      
        ))}
      </Stack>
      <Stack alignItems='center'>
      {totalPages > 1 && 
        <Pagination 
          count={totalPages} 
          color="primary" 
          variant="outlined" 
          size='large' 
          page={page}
          onChange={(_ , value) => setPage(value)}
          boundaryCount={2} 
        />}
      </Stack>
  </>
  )
}


MoviesList.propTypes = {
    totalPages: PropTypes.number,
    page: PropTypes.number,
    setPage: PropTypes.func
}