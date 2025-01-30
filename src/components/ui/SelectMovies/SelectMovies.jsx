
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { resetQuery, selectQuery } from '../../../features/currentQuerySlice';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
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
        const { t } = useTranslation();
        const dispatch = useDispatch();
    const ordersList = ['RATING', 'NUM_VOTE']

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
            <InputLabel>{t('order')}</InputLabel>
            <Select
                value={order}
                onChange={e => dispatch(selectQuery({order: e.target.value}))}
                label="Order"
            >
                {ordersList.map(order => (
                    <MenuItem key={order} value={order}>{t(order)}</MenuItem>
                ))}
            </Select>
        </FormControl>

        <FormControl fullWidth size="small">
            <InputLabel>{t('countries')}</InputLabel>
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
            <InputLabel>{t('genre')}</InputLabel>
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
            <InputLabel>{t('year')}</InputLabel>
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
            <InputLabel>{t('ratingFrom')}</InputLabel>
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
            <InputLabel>{t('ratingTo')}</InputLabel>
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
            <Button onClick={() => dispatch(resetQuery())} variant='outlined' startIcon={<CloseIcon/> }>{t('reset')}</Button>
        </Box>

    </Stack>
  )
}
