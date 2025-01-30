import React, { useEffect, useState } from 'react'
import { useGetFilmsQuery, useGetGenresAndCountriesQuery } from '../../../services/kinopoiskAPI'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import MoviesList from '../../ui/MoviesList';
import { ArrowBack } from '@mui/icons-material';
import ErrorMessage from '../../ui/ErrorMessage';
import { movieTypes } from '../../../constants'
import { useSelector } from 'react-redux';
import SelectMovies from '../../ui/SelectMovies/SelectMovies';
import MoviesTopMainSkeleton from './MoviesTopMainSkeleton';
import { useTranslation } from 'react-i18next';

export default function MoviesTopMain() {
    const { t } = useTranslation(); // Получение функции перевода
  
  const location = useLocation();
  const { countries, order, year, genreId, ratingFrom, ratingTo} = useSelector(
    state => state.currentQuerySlice
  );
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const movieType = movieTypes.find(el => el.url === location.pathname); 
  const myGenreId = movieType.url === '/cartoons' ? 18 : genreId;

  const responseGenresAndCountriesQuery = useGetGenresAndCountriesQuery();   
  const responseFilms = useGetFilmsQuery({
      type: movieType.value,
      genreId: myGenreId,
      countries, order, year, page, ratingFrom, ratingTo
    })

  useEffect(() => {
    setPage(1);
  }, [location]);
  
    if(responseFilms.error || responseGenresAndCountriesQuery.error) return <ErrorMessage />;
    if (responseFilms.isLoading || responseGenresAndCountriesQuery.isLoading) return <MoviesTopMainSkeleton />;

  return (
    <>
      <Stack flexDirection='row' sx={{mt: 2, mb: 2}}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)}  />
        <Typography variant='h5'>{t(movieType.url)}
          
        </Typography>
      </Stack>
      <SelectMovies 
        countriesList={responseGenresAndCountriesQuery.data.countries} 
        genresList={responseGenresAndCountriesQuery.data.genres} 
        ratingFrom={ratingFrom}
        ratingTo={ratingTo}
        countries={countries}
        order={order}
        year={year}
        genreId={genreId}
      />
      <MoviesList 
          movies={responseFilms.data.items} 
          totalPages={responseFilms.data.totalPages} 
          page={page} 
          setPage={setPage}
        />
    </>
  );
}
