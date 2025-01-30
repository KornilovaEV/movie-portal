import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setSearchQuery } from '../../../features/searchQuerySlice';
import { useGetFilmsQuery } from '../../../services/kinopoiskAPI';
import { useTranslation } from 'react-i18next';


export default function Search() {
      const { t } = useTranslation(); // Получение функции перевода
      const movieTypes = {
        FILM: t('/films'),       
        TV_SERIES: t('/series'),
        TV_SHOW: t('tv_shows'),
        MINI_SERIES: t('mini_series'),
      };
  
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { countries, genreId, order, type, year, page, ratingFrom, ratingTo, keyword } = useSelector(
    state => state.searchQuerySlice,
  );

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispatch(setSearchQuery({ keyword: input }));
    }, 500);

    return () => clearTimeout(setTimeoutId);
  }, [input]);

  const { data, isFetching } = useGetFilmsQuery({
    countries,
    genreId,
    order,
    type,
    year,
    page,
    ratingFrom,
    ratingTo,    
    keyword,
  });


  return (
    <Autocomplete
      freeSolo
      sx={{
        width: 250,
      }}
      getOptionLabel={
        option =>
        `${//language === 'ru'?
           option.nameRu 
          //  : option.nameOriginal

        } - ${movieTypes[option.type]} - ${option.year}`
      }
      options={data ? data.items : []}
      onInputChange={(_, value) => {
        setInput(value);
      }}
      onChange={(_, value) => {
        value &&  navigate(`/movie/${value.kinopoiskId}`);
      }}
      renderInput={params => (
        <TextField
          {...params}
          label={t('search')}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isFetching ? (
                  <CircularProgress size={20} color="inherit" />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}