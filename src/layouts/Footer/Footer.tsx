import { Link } from 'react-router-dom'
import cn from 'classnames'

import { Logo } from '@/components'
import { Button, TextField } from '@/ui'
import { ROUTE_NAMES } from '@/core/routes'

import classes from './Footer.module.css'

import LinkedInIcon from '@/assets/icons/social/linked-in.svg?react'
import YoutubeIcon from '@/assets/icons/social/youtube.svg?react'
import InstagramIcon from '@/assets/icons/social/instagram.svg?react'
import FacebookIcon from '@/assets/icons/social/facebook.svg?react'
import PhoneIcon from '@/assets/icons/phone.svg?react'
import MailIcon from '@/assets/icons/mail.svg?react'

export const Footer = () => {
  const social = [
    { label: 'Linked In', icon: <LinkedInIcon />, href: ROUTE_NAMES.HOME },
    { label: 'Youtube', icon: <YoutubeIcon />, href: ROUTE_NAMES.HOME },
    { label: 'Instagram', icon: <InstagramIcon />, href: ROUTE_NAMES.HOME },
    { label: 'Facebook', icon: <FacebookIcon />, href: ROUTE_NAMES.HOME }
  ]

  return (
    <footer className={classes.footer}>
      <div className={classes['logo-mobile']}>
        <Logo color='white' />
      </div>

      <div className={cn('wrapper', classes.grid)}>
        <div className={classes.column}>
          <div className={classes.logo}>
            <Logo color='white' />
          </div>

          <form className={classes['subscribe-form']}>
            <label htmlFor='email'>Subscribe now</label>

            <TextField
              id='email'
              className={classes['subscribe-text-field']}
              type='input'
              placeholder='Enter Your E-mail'
            />

            <Button type='submit' size='small'>
              Subscribe
            </Button>
          </form>
        </div>

        <div className={classes.column}>
          <p>Information</p>

          <Link to={ROUTE_NAMES.ABOUT_US}>About Us</Link>
          <Link to={ROUTE_NAMES.HOME}>FAQ's</Link>
          <Link to={ROUTE_NAMES.NEWS}>News</Link>
        </div>

        <div className={classes.column}>
          <p>Helpful Links</p>

          <Link to={ROUTE_NAMES.HOME}>Supports</Link>
          <Link to={ROUTE_NAMES.HOME}>Terms & Conditions</Link>
          <Link to={ROUTE_NAMES.HOME}>Privacy Policy</Link>
        </div>

        <div className={classes.column}>
          <p>Our Services</p>

          <Link to={ROUTE_NAMES.CARRIERS}>Carriers</Link>
          <Link to={ROUTE_NAMES.BROKERS}>Brokers</Link>
          <Link to={ROUTE_NAMES.SHIPPERS}>Shippers</Link>
        </div>

        <div className={classes.column}>
          <p>Contact Us</p>

          <a href='mailto:info@dispatchleader.org' className={classes['anchor-with-icon']}>
            <MailIcon /> info@dispatchleader.org
          </a>

          <a href='tel:+40330100055' className={classes['anchor-with-icon']}>
            <PhoneIcon />
            +40 3301 000 55
          </a>

          <ul className={classes.social}>
            {social.map(({ label, icon, href }) => {
              return (
                <li key={label}>
                  <Link to={href}>{icon}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
