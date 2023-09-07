import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { RouteEnum } from '../enums/RouteEnum.ts';

const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage.tsx'));
const GlobalPage = lazy(() => import('pages/HomePage/HomePage.tsx'));
const AccountantsPage = lazy(() => import('pages/AccountantsPage/AccountantsPage.tsx'));

export const router = createBrowserRouter([
  {
    path: RouteEnum.GLOBAL_PAGE,
    element: <GlobalPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: RouteEnum.ACCOUNTANTS_PAGE,
        element: <AccountantsPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
