import React, { useContext, useEffect } from 'react'
import { useGetFilmQuery, useGetStaffQuery } from '../../../services/kinopoiskAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, ButtonGroup, CircularProgress, Grid, Typography } from '@mui/material';
import ErrorMessage from '../../ui/ErrorMessage';
import { ArrowBack, Language, Movie } from '@mui/icons-material';
import AddToFavorite from '../../ui/AddToFavorite/AddToFavorite';
import AppContext from '../../../context';
import { useTranslation } from 'react-i18next';

export default function MoviesDetail() {
  const {userItems} = useContext(AppContext);  

  useEffect(() => {
            localStorage.setItem('userItems', JSON.stringify(userItems));
        }, [userItems]);


  const {id} = useParams();
  const responseFilm = useGetFilmQuery(id); 
  const responseStaff = useGetStaffQuery(id);  
  
  const navigation = useNavigate();

  if (responseFilm.isLoading ||  responseStaff.isLoading) {
    return (
      <Box display='flex' justifyContent='center' margin='auto'>
        <CircularProgress size='8rem' />
      </Box>
    )
  }
  
  if (responseFilm.error || 
    responseStaff.error) return <ErrorMessage/>


  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={3} mt='15px' sm={12}>
          <img src={responseFilm.data.posterUrl} alt={responseFilm.data.nameRu} width='100%' />
        </Grid>
        <Grid item md={7} sm={12}>
          <Grid container >
            <Grid item xs={1}> 
              <Button startIcon={<ArrowBack />} size='large' onClick={() => navigation(-1) } >

              </Button>
            </Grid>
            <Grid item xs={9} ml="10px"> 
              <Typography variant='h5' alignContent='center'>{responseFilm.data.nameRu}</Typography>
            </Grid>
            <Grid item xs={1} ml="10px"> 
              <Typography position='relative' variant='h5' alignContent='center'>{
                userItems.some( user => user.session === true) &&
                <AddToFavorite movie={responseFilm.data}/>
                }</Typography>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item xs={6}> <Typography>Год</Typography>
            </Grid>
            <Grid item xs={6}> <Typography gutterBottom>{responseFilm.data.year}</Typography>
            </Grid>
            <Grid item xs={6}> <Typography>Страна</Typography>
            </Grid>
            <Grid item xs={6}> 
              {responseFilm.data.countries.map(({country}) => (
                <Typography key={country} gutterBottom>{country}</Typography>
              ))}
            </Grid>
            <Grid item xs={6}> <Typography>Жанры</Typography>
            </Grid>
            <Grid item xs={6}> 
              {responseFilm.data.genres.map(({genre}) => (
                <Typography key={genre} gutterBottom>{genre}</Typography>
              ))}
            </Grid>
            <Grid item xs={6}> <Typography>Режиссеры</Typography>
            </Grid>
            <Grid item xs={6}> 
              {responseStaff.data
                .filter(el => el.professionText === 'Режиссеры')
                .map(({nameRu}) => (
                <Typography key={nameRu} gutterBottom>{nameRu}</Typography>
              ))}
            </Grid>
            <Grid item xs={6}> <Typography>Продолжительность</Typography>
            </Grid>
            <Grid item xs={6}> <Typography gutterBottom>{responseFilm.data.filmLength} мин</Typography>
            </Grid>
            <Grid item xs={12}> <Typography gutterBottom>Описание</Typography>
            </Grid>
            <Grid item xs={12}> <Typography gutterBottom>{responseFilm.data.description ? responseFilm.data.description : 'Описание отсутствует на портале'}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} sm={12}> 
          <Typography variant='h6'>В главных ролях:</Typography>
          {
            responseStaff.data.filter(el => el.professionText === 'Актеры')
            .slice(0, 15)
            .map(({nameRu}) => (
            <Typography key={nameRu} gutterBottom>{nameRu}</Typography>
            ))
          }
        </Grid>
      </Grid>
      <Grid 
        container 
        spacing={2} 
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        flexDirection='column' ///////////////////////////////////////////////////
        mt='5px'
      >
        <Grid item xs={12}>
          <ButtonGroup variant="outlined" size='small'>
            <Button target='_blank' href={responseFilm.data.webUrl} endIcon={<Language />} >Кинопоиск</Button>
            {responseFilm.data.imbId && <Button 
              target='_blank' 
              href={`https://www.imdb.com/title/${responseFilm.data.imbId}`} 
              endIcon={<Movie />}
            >IMDB</Button>}
        </ButtonGroup>          
        </Grid>
      </Grid>
    </>
  )

  
}
