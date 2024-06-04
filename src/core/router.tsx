import { createBrowserRouter } from 'react-router-dom'

import { PageLayout } from '@/layouts'
import { ROUTE_NAMES } from './routes'

import {
  HomePage,
  AboutUsPage,
  ContactUsPage,
  NewsPage,
  CarriersPage,
  BrokersPage,
  ShippersPage,
  LogInPage,
  CarriersProfilePage,
  OrderPage,
  LoadboardPage
} from '@/pages'

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: ROUTE_NAMES.HOME,
        element: <HomePage />
      },
      {
        path: ROUTE_NAMES.ABOUT_US,
        element: <AboutUsPage />
      },
      {
        path: ROUTE_NAMES.CONTACT_US,
        element: <ContactUsPage />
      },
      {
        path: ROUTE_NAMES.NEWS,
        element: <NewsPage />
      },
      {
        path: ROUTE_NAMES.CARRIERS,
        element: <CarriersPage />
      },
      {
        path: ROUTE_NAMES.BROKERS,
        element: <BrokersPage />
      },
      {
        path: ROUTE_NAMES.SHIPPERS,
        element: <ShippersPage />
      }
    ]
  },
  {
    path: ROUTE_NAMES.LOG_IN,
    element: <LogInPage />
  },
  {
    element: <PageLayout role='admin' />,
    children: [
      {
        path: ROUTE_NAMES.CARRIERS_PROFILE,
        element: <CarriersProfilePage />
      },
      {
        path: ROUTE_NAMES.ORDER,
        element: <OrderPage />
      },
      {
        path: ROUTE_NAMES.LOADBOARD,
        element: <LoadboardPage />
      }
    ]
  }
])
