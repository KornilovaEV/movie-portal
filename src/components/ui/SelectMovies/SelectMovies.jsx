
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { resetQuery, selectQuery } from '../../../features/currentQuerySlice';
export default function SelectMovies({
    countriesList,
    genresList,
    ratingFrom,
    ratingTo,
    countries,
    order,
    year,
    genreId,
    }) {

        const dispatch = useDispatch();

    const ordersList = [
        {
            title: 'По рейтингу',
            value: 'RATING'
        },
        {
            title: 'По оценкам',
            value: 'NUM_VOTE'
        },
    ]

    const yearList = new Array(50).fill(null).map( (_, ind) => ({
        title: new Date().getFullYear() - ind, 
        value: new Date().getFullYear() - ind
    }))
    const ratingList = new Array(11).fill(null).map( (_, ind) => ({
        title: 10 - ind, 
        value: 10 - ind, 
        value1: 10 - ind,
    }))
  return (
    <Stack sx={{
        marginTop: '5px',
        marginBottom: '20px',
        flexDirection: {sm: 'column', md: 'row'},
        gap: 1,
    }} >
        <FormControl fullWidth size="small">
            <InputLabel>Сортировка</InputLabel>
            <Select
                value={order}
                onChange={e => dispatch(selectQuery({order: e.target.value}))}
                label="Order"
            >
                {ordersList.map(order => (
                    <MenuItem key={order.title} value={order.value}>{order.title}</MenuItem>
                ))}
            </Select>
        </FormControl>

        <FormControl fullWidth size="small">
            <InputLabel>Страна</InputLabel>
            <Select
                value={countries}
                onChange={e => dispatch(selectQuery({countries: e.target.value}))}
                label="Country"
            >
                {countriesList.map(country => (
                    <MenuItem key={country.id} value={country.id}>{country.country}</MenuItem>
                ))}
            </Select>
        </FormControl>


        <FormControl fullWidth size="small">
            <InputLabel>Жанр</InputLabel>
            <Select
                value={genreId}
                onChange={e => dispatch(selectQuery({genreId: e.target.value}))}
                label="Genre"
            >
                {genresList.map(genre => (
                    <MenuItem key={genre.id} value={genre.id}>{genre.genre}</MenuItem>
                ))}
            </Select>
        </FormControl>
        
        <FormControl fullWidth size="small">
            <InputLabel>Год</InputLabel>
            <Select
                value={year}
                onChange={e => dispatch(selectQuery({year: e.target.value}))}
                label="Year"
            >
                {yearList.map(year => (
                    <MenuItem key={year.title} value={year.value}>{year.title}</MenuItem>
                ))}
            </Select>
        </FormControl>

        <FormControl fullWidth size="small">
            <InputLabel>Рейтинг с</InputLabel>
            <Select
                value={ratingFrom}
                onChange={e => dispatch(selectQuery({ratingFrom: e.target.value}))}
                label="RatingFrom"
            >
                {ratingList.map(rating => (
                    <MenuItem key={rating.title} value={rating.value}>{rating.title}</MenuItem>
                ))}
            </Select>
        </FormControl>

        <FormControl fullWidth size="small">
            <InputLabel>Рейтинг по</InputLabel>
        <Select
                value={ratingTo}
                onChange={e => dispatch(selectQuery({ratingTo: e.target.value}))}
                label="RatingTo"
            >
                {ratingList.map(rating => (
                    <MenuItem key={rating.title} value={rating.value1}>{rating.title}</MenuItem>
                ))}
            </Select>
        </FormControl>

        <Box>
            <Button onClick={() => dispatch(resetQuery())} variant='outlined' startIcon={<CloseIcon/> }>Сбросить</Button>
        </Box>

    </Stack>
  )
}
