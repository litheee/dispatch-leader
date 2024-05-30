import { Link } from 'react-router-dom'

import { LangSelect, Logo } from '@/components'
import { Button } from '@/ui'

import { ROUTE_NAMES } from '@/core/routes'

import classes from './Header.module.css'

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className='wrapper'>
        <Logo />

        <div className={classes.right}>
          <div className={classes['common-buttons']}>
            <LangSelect />

            <Button variant='text' size='small'>
              Demo
            </Button>
          </div>

          <div className={classes['auth-links']}>
            <Link to={ROUTE_NAMES.LOG_IN}>
              <Button variant='outlined' size='medium'>
                Sign Up
              </Button>
            </Link>

            <Link to={ROUTE_NAMES.LOG_IN}>
              <Button size='medium'>Log In</Button>
            </Link>
          </div>
        </div>

        <div className={classes['mobile-menu']}>
          <button className={classes['hamburger-button']}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
