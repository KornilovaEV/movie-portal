import React, { useContext, useEffect, useState } from 'react'
import { useGetFilmQuery, useGetStaffQuery } from '../../../services/kinopoiskAPI';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Button, ButtonGroup, CircularProgress, Grid, Typography } from '@mui/material';
import ErrorMessage from '../../ui/ErrorMessage';
import { ArrowBack, Language, Movie } from '@mui/icons-material';
import AddToFavorite from '../../ui/AddToFavorite/AddToFavorite';
import AppContext from '../../../context';
import { useTranslation } from 'react-i18next';

export default function MoviesDetail() {
    const { t } = useTranslation();
    const {userItems} = useContext(AppContext);  
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'ru');

    useEffect(() => {
      setLanguage(localStorage.getItem('language'))
    }, [localStorage.getItem('language')])


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
      <Grid container mt={2} spacing={2}>
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
              <Typography variant='h5' alignContent='center'>{language === 'ru' ? 
              responseFilm.data.nameRu : 
              (responseFilm.data.nameOriginal || responseFilm.data.nameRu)
              }</Typography>
            </Grid>
            <Grid item xs={1} ml="10px"> 
              <Typography position='relative' variant='h5' alignContent='center'>{
                userItems.some( user => user.session === true) &&
                <AddToFavorite movie={responseFilm.data}/>
                }</Typography>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item xs={6}> <Typography>{t('year')}</Typography>
            </Grid>
            <Grid item xs={6}> <Typography gutterBottom>{responseFilm.data.year}</Typography>
            </Grid>
            <Grid item xs={6}> <Typography>{t('countries')}</Typography>
            </Grid>
            <Grid item xs={6}> 
              {responseFilm.data.countries.map(({country}) => (
                <Typography key={country} gutterBottom>{country}</Typography>
              ))}
            </Grid>
            <Grid item xs={6}> <Typography>{t('genre')}</Typography>
            </Grid>
            <Grid item xs={6}> 
              {responseFilm.data.genres.map(({genre}) => (
                <Typography key={genre} gutterBottom>{genre}</Typography>
              ))}
            </Grid>
            <Grid item xs={6}> <Typography>{t('directors')}</Typography>
            </Grid>
            <Grid item xs={6}> 
              {responseStaff.data
                .filter(el => el.professionText === 'Режиссеры')
                .slice(0, 10) 
                .map(({nameRu}) => (
                <Typography key={nameRu} gutterBottom>{nameRu}</Typography>
              ))}
            </Grid>
            <Grid item xs={6}> <Typography>{t('duration')}</Typography>
            </Grid>
            <Grid item xs={6}> <Typography gutterBottom>{responseFilm.data.filmLength}{t('min')}</Typography>
            </Grid>
            <Grid item xs={12}> <Typography gutterBottom>{t('description')}</Typography>
            </Grid>
            <Grid item xs={12}> <Typography gutterBottom>{responseFilm.data.description ? responseFilm.data.description : t('descriptionNull')}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} sm={12}> 
          <Typography variant='h6'>{t('leadingRoles')}</Typography>
          {
            responseStaff.data.filter(el => el.professionText === 'Актеры')
            .slice(0, 15)
            .map(({nameRu}) => (
            <Typography key={nameRu} gutterBottom>- {nameRu}</Typography>
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
        flexDirection='column'
        mt='5px'
      >
        <Grid item xs={12}>
          <ButtonGroup variant="outlined" size='small'>
            <Button 
              target='_blank' 
              component={Link} to={responseFilm.data.webUrl} 
              endIcon={<Language />} 
              >{t('kinopoisk')}</Button>
            {responseFilm.data.imbId && <Button 
              target='_blank' 
              component='Link'
              to={`https://www.imdb.com/title/${responseFilm.data.imbId}`} 
              endIcon={<Movie />}
            >IMDB</Button>}
        </ButtonGroup>          
        </Grid>
      </Grid>
    </>
  )

  
}
