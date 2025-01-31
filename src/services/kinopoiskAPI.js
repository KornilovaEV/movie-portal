// import 'dotenv/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// require('dotenv').config();
const config = require('../config.json');
const excludeGenres = [
  '',
  'новости',
  'для взрослых',
  'церемония',
  'реальное ТВ',
  'ток-шоу',
];

// Define a service using a base URL and expected endpoints
export const kinopoiskApi = createApi({  
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kinopoiskapiunofficial.tech/api',
    prepareHeaders: headers => {
        headers.set('X-API-KEY', 
          // process.env.REACT_APP_KINOPOISK_KEY
          config.REACT_APP_KINOPOISK_KEY
        );
        headers.set('Content-Type','application/json');
    }
   }),
  endpoints: builder => ({
    getFilmsTop: builder.query({
      query: ({
        type,
        page
      }) => `/v2.2/films/collections?type=${type}&page=${page}`,
    }),

  getFilms: builder.query({
    query: ({
      countries, 
      genreId, 
      order = 'NUM_VOTE',
      type = 'FILM',
      year,
      page,
      ratingFrom,
      ratingTo,
      keyword = '',
    }) => `/v2.2/films?countries=${countries}&genres=${genreId}&order=${order}&type=${type}&yearFrom=${year}&yearTo=${year}&page=${page}&ratingFrom=${ratingFrom}&ratingTo=${ratingTo}&keyword=${keyword}`
  }),

  getGenresAndCountries: builder.query({
    query: () => '/v2.2/films/filters',
    transformResponse: response => ({
      ...response, 
      genres : response.genres.filter(({genre}) => !excludeGenres.includes(genre), 
      )
    })
  }),

  getFilm: builder.query({
    query: id => `/v2.2/films/${id}`
  }),

  getStaff: builder.query({
    query: id => `/v1/staff?filmId=${id}`,
  }),

  }),
})

export const { 
  useGetFilmsTopQuery, 
  useGetFilmsQuery, 
  useGetGenresAndCountriesQuery, 
  useGetFilmQuery, 
  useGetStaffQuery  
} = kinopoiskApi