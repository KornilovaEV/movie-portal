import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countries : '',
  genreId : '',
  order: 'NUM_VOTE',
  type: '',
  year: '',
  page: 1,
  ratingFrom: '',
  ratingTo: '',
  keyword: '',
};

 


export const searchQuerySlice = createSlice({
  name: 'searchQuerySlice',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

  
export const {setSearchQuery} = searchQuerySlice.actions;
export default searchQuerySlice.reducer