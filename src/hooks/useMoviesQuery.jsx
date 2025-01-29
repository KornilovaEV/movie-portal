import { useGetFilmsTopQuery, useGetFilmsQuery } from '../services/kinopoiskAPI';
import { menuItem } from '../constants'
import { useSelector } from 'react-redux';

export default function useMoviesQuery() {
    const { countries, order, year,  page, ratingFrom, ratingTo} = useSelector(
      state => state.currentQuerySlice
    );



    const responsePopular = useGetFilmsTopQuery({
        type: menuItem[0].value,
        page,
    });

    const responseFilms = useGetFilmsQuery({
        type: 'FILM',
        countries, 
        genreId: '1', 
        order, 
        year, 
        page, ratingFrom, ratingTo
    });

    const responseSeries = useGetFilmsQuery({
        type: 'TV_SERIES',
        countries, 
        genreId: '1', 
        order, 
        year, 
        page, ratingFrom, ratingTo
    }) ;

    const responseCartoons = useGetFilmsQuery({
        type: 'FILM',
        countries, 
        genreId: '18', 
        order, 
        year, 
        page, ratingFrom, ratingTo
    }) ;

    const isLoading = 
    responsePopular.isFetching || 
    responseFilms.isFetching || 
    responseSeries.isFetching || 
    responseCartoons.isFetching;

    const hasError = 
    responsePopular.error || 
    responseFilms.error || 
    responseSeries.error || 
    responseCartoons.error;

  return {
    isLoading, hasError, responsePopular, responseFilms, responseSeries, responseCartoons

  }
}
