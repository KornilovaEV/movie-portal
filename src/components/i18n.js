import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Ваши переводы
const resources = {
  en: {
    translation: {
      'logOut': 'log out of your account?',
      'error': 'An error has occurred',
      'errorMessage':'There is no such page',
      'errorMessageToHome': 'Go back to the main page',
      'navLike': 'Like',
      'navProfile': 'Profile',
      'footer':'This website was created by E.V. Kostenko for the final project',
      'footer2':'according to the React-intensive course from Aston',
      'TOP_POPULAR_ALL': 'TOP 100',
      'TOP_250_TV_SHOWS': 'TOP 250 TV SHOWS',
      'TOP_250_MOVIES': 'TOP 250 MOVIES',
      'VAMPIRE_THEME': 'VAMPIRE',
      'COMICS_THEME': 'COMICS',
      '/films': 'FILM',
      '/series': 'Series',
      '/cartoons': 'Cartoons',
      'tv_shows': 'TV SHOWS',
      'mini_series': 'MINI Series',
      'search': 'Search',
      'loading': 'Loading',
      'emailIncorrect': 'The email is incorrect',
      'emailNull': 'An email cannot be empty',
      'passwordIncorrect': 'The password must be longer than 3 and less than 8 characters.',
      'passwordNull': 'Password cannot be empty',
      'passwordEqual': 'Passwords must match',
      'logIn': 'Log in to your personal account',
      'logEnter': 'Enter your email address.....',
      'passwordEnter': 'Enter your password.....',
      'confirm':'Confirm',
      'errorAuthorization': 'Make sure that your password and/or login are entered correctly',
      'registration': 'Registration',
      'registrationAccount': 'Personal account registration',
      'logInHaveAcc':'Do you have an account? Log in',
      'likeError':'Error when adding to favorites',
      'order':'Sorting',
      'countries':'Countries',
      'genre':'Genre',
      'year':'Year',
      'ratingFrom':'Rating from',
      'ratingTo': 'Rating to',
      'reset':'Reset',
      'RATING':'By rating',
      'NUM_VOTE':'By evaluation',
      'kinopoisk': 'Kinopoisk',
      'directors':'Directors',
      'duration':'Duration',
      'min':'min',
      'description':'Description',
      'descriptionNull': 'The description is missing on the portal',
      'leadingRoles':'In leading roles:',
      'emailDuplicate': 'This email already exists',
      'exit': 'Do you really want to ',
      'yes': 'Yes',
      'no': 'No',
      'deleteAcc': 'delete your account?',


    }
  },
  ru: {
    translation: {
      'logOut': 'выйти с аккаунта?',
      'error': 'Произошла ошибка',
      'errorMessage':'Такой страницы не существует',
      'errorMessageToHome': 'Вернуться на главную',
      'navLike': 'Избранные',
      'navProfile': 'Аккаунт',
      'footer':'Данный сайт создан Костенко Е.В. для итогового проекта',
      'footer2':'по курсу React-интенсив от Aston',
      'TOP_POPULAR_ALL': 'ТОП 100',
      'TOP_250_TV_SHOWS': 'ТОП 250 сериалов',
      'TOP_250_MOVIES': 'ТОП 250 фильмов',
      'VAMPIRE_THEME': 'Вампиры',
      'COMICS_THEME': 'Комедии',
      '/films': 'Фильмы',
      '/series': 'Сериалы',
      '/cartoons': 'Мультфильмы',
      'tv_shows': 'ТВ-Шоу',
      'mini_series': 'Мини-сериал',
      'search': 'Поиск',
      'loading': 'Загрузка',
      'emailIncorrect': 'Email не корректный',
      'emailNull': 'Email не может быть пустым',
      'passwordIncorrect': 'Пароль должен быть длинннее 3 и меньше 8 символов',
      'passwordNull': 'Пароль не может быть пустым',
      'passwordEqual': 'Пароли должны совпадать',
      'logIn': 'Войти в личный кабинет',
      'logEnter': 'Введите ваш email.....',
      'passwordEnter': 'Введите ваш пароль.....',
      'confirm':'Подтвердить',
      'errorAuthorization': 'Проверьте правильность ввода пароля и/или лологина',
      'registration': 'Зарестрироваться',
      'registrationAccount': 'Регистрация личного кабинетa',
      'logInHaveAcc':'Есть аккаунт? Авторизоваться',
      'likeError':'Ошибка при добавлении в избранное',
      'order':'Сортировка',
      'countries':'Страна',
      'genre':'Жанр',
      'year':'Год',
      'ratingFrom':'Рейтинг с',
      'ratingTo': 'Рейтинг по',
      'reset':'Сбросить',
      'RATING':'По рейтингу',
      'NUM_VOTE':'По оценкам',
      'kinopoisk': 'Кинопоиск',
      'directors':'Режиссеры',
      'duration':'Продолжительность',
      'min':'мин',
      'description':'Описание',
      'descriptionNull': 'Описание отсутствует на портале',
      'leadingRoles':'В главных ролях:',
      'emailDuplicate': 'Данный email уже существует',
      'exit': 'Вы действительно хотите ',
      'yes': 'Да',
      'no': 'Нет',
      'deleteAcc': 'удалить ваш аккаунт?',


    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // Язык по умолчанию
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

