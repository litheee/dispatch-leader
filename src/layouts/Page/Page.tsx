import { Outlet } from 'react-router-dom'
import cn from 'classnames'

import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

import classes from './Page.module.css'

export const PageLayout = () => {
  return (
    <>
      <Header />

      <main className={cn('wrapper', classes.content)}>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
