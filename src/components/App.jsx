import React, { lazy, Suspense, useEffect, useState, useContext, createContext, useReducer } from "react";
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Movies from "./pages/Movies";
import { movieTypes, menuItem } from "../constants";
import AppContext from '../context';
import NotFoundPage from './NotFoundPage';
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const Registration = lazy(() => import("./pages/Registration"));
const MoviesDetail = lazy(() => import("./pages/MoviesDetail")); 
const LikePage = lazy(() => import("./pages/LikePage"));
const Authorization = lazy(() => import("./pages/Authorization"));
const MoviesTopList = lazy(() => import("./pages/MoviesTopList"));  
const MoviesTopMain = lazy(() => import("./pages/MoviesTopMain"));  
const UserPage = lazy(() => import("./pages/UserPage"));  


function App() {
  const { t } = useTranslation();
  const LoadingFallback = () => <Stack textAlign="center" m="auto">{t('loading')}...</Stack>;

  const [movieItems, setMovieItems] = useState(() => {
    const saved = localStorage.getItem("movieItems");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });  
  
  const [userItems, setUserItems] = useState(() => {
    const saved = localStorage.getItem("userItems");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });  

  useEffect(() => {
              localStorage.setItem('userItems', JSON.stringify(userItems));
          }, [userItems]);
  
  const router = createBrowserRouter([
    {
      path: "/movie-portal/",
      element: <Layout/>,
      children: [
        {
          index: true,//path: "/",
          element: <Movies/>
        },
        ...movieTypes.map(el =>({
          path: el.url,
          element: <Suspense fallback={<LoadingFallback />}><MoviesTopMain/></Suspense>
        })),
        ...menuItem.map(el =>({
          path: el.url,
          element: <Suspense fallback={<LoadingFallback />}><MoviesTopList/></Suspense>
        })),
        {
          path: "/like",
          element:  userItems.some((user) => user.session)
          ?
           <Suspense fallback={<LoadingFallback />}><LikePage/></Suspense> 
          :
          <Suspense fallback={<LoadingFallback />}><Authorization/></Suspense>
        },
        {
          path: "/autorization",
          element: <Suspense fallback={<LoadingFallback />}><Authorization/></Suspense>
        },
        {
          path: "/registration",
          element: <Suspense fallback={<LoadingFallback />}><Registration/></Suspense>
        },
        {
          path: "/user",
          element: userItems.some((user) => user.session)
          ?  
          <Suspense fallback={<LoadingFallback />}><UserPage/></Suspense> 
          : 
          <Suspense fallback={<LoadingFallback />}><Authorization/></Suspense>
        },
        {
          path: "/movie/:id",
          element: <Suspense fallback={<LoadingFallback />}><MoviesDetail/></Suspense>
        },
        {
          path: "*",
          element: <NotFoundPage/>
        },
      ]
    },
  ]
);
  return ( 
      <AppContext.Provider value={{movieItems, setMovieItems, userItems, setUserItems}} >
          <RouterProvider router={router}/>
        </AppContext.Provider>
  )
}

export default App;
