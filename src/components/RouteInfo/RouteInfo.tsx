import GoogleMapReact from 'google-map-react'
import cn from 'classnames'

import { Rating } from '@/ui'

import classes from './RouteInfo.module.css'
import logoSrc from '@/assets/img/ktb-global-logo.png'
import PhoneIcon from '@/assets/icons/phone.svg?react'
import MailIcon from '@/assets/icons/mail.svg?react'
import HeartIcon from '@/assets/icons/heart.svg?react'
import ArrowRightIcon from '@/assets/icons/arrow-right.svg?react'

export const RouteInfo = () => {
  return (
    <div className={classes['route-info']}>
      <div className={cn(classes.column, classes.company)}>
        <div className={classes['company-top']}>
          <div className={classes['company-img']}>
            <img src={logoSrc} alt='company' />
          </div>

          <div className={classes['company-name']}>
            <p>KTB GLOBAL INC</p>
            <p>VAT: 0251547</p>
          </div>

          <div className={classes['company-rating']}>
            <Rating />

            <div className={classes['days-to-pay']}>
              <HeartIcon />
              <span>days to pay</span>
              <span>30</span>
            </div>

            <div className={classes.broker}>Broker</div>
          </div>
        </div>

        <div className={classes['company-contacts']}>
          <p>Matthew W.</p>

          <a href='mailto:matthew.winteregg@ktbglobal.de'>
            <MailIcon /> matthew.winteregg@ktbglobal.de
          </a>

          <a href='tel:49250202500'>
            <PhoneIcon /> +49 250 20 2500
          </a>
        </div>
      </div>

      <div className={cn(classes.column, classes.price)}>
        <p>€1500</p>
        <p>€1,21/km</p>
      </div>

      <div className={cn(classes.column, classes.dates)}>
        <p>
          <span>Pick up:</span>
          <span>16/04</span>
        </p>

        <p>
          <span>Delivery:</span>
          <span>20/04</span>
        </p>

        <p>
          <span></span>
          <span>On 16/04</span>
        </p>
      </div>

      <div className={cn(classes.column, classes.route)}>
        <p>Hamburg, DE 20097</p>
        <span className={classes.arrow} />
        <p>1238 km</p>
        <span className={classes.arrow} />
        <p>Asti, IT 14100</p>

        <div className={classes['route-distance']}>
          <div>
            <span>283</span> <ArrowRightIcon /> <span>to Anywhere</span>
          </div>

          <div>
            <span>5</span> <ArrowRightIcon /> <span>to Hamburg, DE 20097</span>
          </div>
        </div>
      </div>

      <div className={cn(classes.column, classes.size)}>
        <p>Reefer</p>
        <p>L: 15 m</p>
        <p>H: 1,5 m</p>
        <p>W: 22000 kg</p>
        <p>LTL</p>
      </div>

      <div className={cn(classes.column, classes['special-information'])}>
        <h4>Special Information:</h4>
      </div>

      <div className={classes.column}>
        <div className={classes.map}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={{
              lat: 10.99835602,
              lng: 77.01502627
            }}
            defaultZoom={4}
          />
        </div>
      </div>
    </div>
  )
}
