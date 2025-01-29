import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircle from '@mui/icons-material/AccountCircle';
export const iconComponents = {
  AccountCircle, FavoriteBorderIcon
};


export const menuItem = [
  {
    name:'ТОП 100',
    value: 'TOP_POPULAR_ALL',
    url: '/top'
  },
  {
    name:'ТОП 250 сериалов',
    value: 'TOP_250_TV_SHOWS',
    url: '/top_250_tv_shows'
  },
  {
    name:'ТОП 250 фильмов',
    value: 'TOP_250_MOVIES',
    url: '/top_250_movies'
  },
  {
    name:'Вампиры',
    value: 'VAMPIRE_THEME',
    url: '/vampire'
  },
  {
    name:'Комедии',
    value: 'COMICS_THEME',
    url: '/comics'
  },
]

export const movieTypes = [
  {
    name:'Фильмы',
    value: 'FILM',
    url: '/films'
  },
  {
    name:'Сериалы',
    value: 'TV_SERIES',
    url: '/series'
  },
  {
    name:'Мультфильмы',
    value: 'FILM',
    url: '/cartoons'
  },

]



export const pages = [
  {
    name:'Like',
    url: '/like',
    icon: 'FavoriteBorderIcon',
  },
  {
    name:'Profile',
    url: '/user',
    icon: 'AccountCircle',
  }
];
