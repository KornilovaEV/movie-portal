import React from 'react'
import Typebar from '../../ui/Typebar';
import { Grid, Link, Stack, useMediaQuery } from '@mui/material';
import useMoviesQuery from '../../../hooks/useMoviesQuery';
import BearCarousel, {BearSlideImage} from 'bear-react-carousel';
import { Link as RouterLink } from 'react-router-dom'
import ErrorMessage from '../../ui/ErrorMessage';
import MoviesSkeleton from './MoviesSkeleton';




export default function Movies() {
  const {
    isLoading, 
    hasError, 
    responsePopular, 
    responseFilms, 
    responseSeries, 
    responseCartoons
  } = useMoviesQuery();

  const isMobile = useMediaQuery('(max-width:600px)');

  if (isLoading) return <MoviesSkeleton />;
  if (hasError) return <ErrorMessage />;

  const serializeDataForCarousel = data => 
    data.map(row => (
      <RouterLink key={row.id} to={`/movie/${row.kinopoiskId}`}>
        <BearSlideImage  imageUrl={row.posterUrlPreview} />   
      </RouterLink>
    ))

  const carouselArr = [
    {
      title: 'Фильмы',
      url: '/films',
      data: serializeDataForCarousel(responseFilms.data.items)
    },
    {
      title: 'Сериалы',
      url: '/series',
      data: serializeDataForCarousel(responseSeries.data.items)
    },
    {
      title: 'Мультфильмы',
      url: '/cartoons',
      data: serializeDataForCarousel(responseCartoons.data.items)
    },
    {
      title: 'Популярные фильмы',
      url: '/top',
      data: serializeDataForCarousel(responsePopular.data.items)
    },
  ]

  

  return (
    <Grid container spacing={2}>
      { 
        !isMobile &&
        <Grid item md={2} sm={0}>
          <Typebar/>
        </Grid>}
        <Grid item md={10} sm={12}>
      {     
        carouselArr.map(carousel => (
        <Stack  
          key={carousel.title}        
        > 
          <Link 
            sx={{mt: 2, mb: 2}} 
            underline="none" 
            variant='h4' 
            component={RouterLink} 
            to={carousel.url}
          >{carousel.title}</Link>
          <BearCarousel 
            data={carousel.data} 
            slidesPerView={1} 
            slidesPerGroup={1} 
            isEnableNavButton 
            isEnableLoop
            isEnableAutoPlay
            autoPlayTime={5000} 
            breakpoints={{
              375: {
                autoPlayTime: 0,
              },
              768: {
                slidesPerView: 5,
              },
            }} 
          />
         </Stack>
        ))
        
        }
      </Grid>
    </Grid>
  )
}
