import React, { useEffect, useState } from 'react'
import { useGetFilmsTopQuery } from '../../../services/kinopoiskAPI'
import { useLocation, useNavigate } from 'react-router-dom';
import { menuItem } from '../../../constants'
import { Button, Stack, Typography } from '@mui/material';
import MoviesList from '../../ui/MoviesList';
import { ArrowBack } from '@mui/icons-material';
import ErrorMessage from '../../ui/ErrorMessage';
import MoviesTopListSkeleton from './MoviesTopListSkeleton';

export default function MoviesTopList() {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const movieType = menuItem.find(el => el.url === location.pathname);
  

  const {data, error, isLoading} = useGetFilmsTopQuery({
    type: movieType.value,
    page,
  })

  useEffect(() => {
    setPage(1);
  }, [location]);
  
  if(error) return <ErrorMessage />;
  if(isLoading) return <MoviesTopListSkeleton />;

  return (
    <>
      <Stack flexDirection='row' sx={{mt: 2, mb: 2}}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)}  />
        <Typography variant='h5'>{movieType.name}</Typography>
      </Stack>
      <MoviesList 
          movies={data.items} 
          totalPages={data.totalPages} 
          page={page} 
          setPage={setPage}
        />
    </>
  );
}
