import { Link } from 'react-router-dom'

import { Logo } from '@/components'
import { Button } from '@/ui'

import { ROUTE_NAMES } from '@/core/routes'

import classes from './AdminHeader.module.css'
import BellIcon from '@/assets/icons/bell.svg?react'
import UserIcon from '@/assets/icons/user.svg?react'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'

export const AdminHeader = () => {
  return (
    <header className={classes.header}>
      <div className='wrapper'>
        <Logo />

        <div className={classes.right}>
          <button type='button'>
            <BellIcon />
          </button>

          <div className={classes['auth-links']}>
            <Link to={ROUTE_NAMES.HOME}>
              <Button variant='outlined' size='medium'>
                Live Support
              </Button>
            </Link>

            <Button size='medium' className={classes['admin-button']}>
              <UserIcon /> Admin <ChevronDownIcon />
            </Button>
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
