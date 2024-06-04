import { Outlet } from 'react-router-dom'
import cn from 'classnames'

import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { AdminHeader } from '../AdminHeader/AdminHeader'

import classes from './Page.module.css'

type PageLayoutProps = {
  role?: 'guest' | 'admin'
}

export const PageLayout = ({ role = 'guest' }: PageLayoutProps) => {
  return (
    <>
      {role === 'admin' ? <AdminHeader /> : <Header />}

      <main className={cn('wrapper', classes.content)}>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
