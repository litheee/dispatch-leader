import cn from 'classnames'

import { NewOfferForm } from '../NewOfferForm/NewOfferForm'
import { ReviewRate } from '../ReviewRate/ReviewRate'

import classes from './Order.module.css'
import CrossIcon from '@/assets/icons/cross.svg?react'
import PhoneIcon from '@/assets/icons/phone.svg?react'
import MailIcon from '@/assets/icons/mail.svg?react'

export const Order = () => {
  return (
    <div className={classes.order}>
      <div className={classes.header}>
        <h2>Order ID: 21254</h2>

        <span className={classes['company-title']}>Turn Time Transport INC</span>

        <button type='button'>
          <CrossIcon />
        </button>
      </div>

      <div className={classes.grid}>
        <div className={classes.card}>
          <div className={classes['card-header']}>
            <h4>Origin and destination:</h4>
          </div>

          <div className={classes.column}>
            <p>Hanover DE 61041</p>
            <p>Prague CZ 10400</p>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes['card-header']}>
            <h4>Payment and Dates:</h4>
          </div>

          <div className={classes['two-columns']}>
            <div className={classes.column}>
              <p>
                <span className={classes.red}>30</span> Business Days
              </p>

              <p>Posted on: 2h ago</p>
            </div>

            <div className={classes.price}>€1500</div>
          </div>
        </div>

        <div className={classes['new-offer']}>
          <NewOfferForm />
        </div>

        <div className={classes.card}>
          <div className={classes['card-header']}>
            <h4>Equipment and Trailer Options:</h4>
          </div>

          <div className={classes['two-columns']}>
            <div>
              <p>Step Deck</p>
            </div>

            <div className={classes.column}>
              <p>ADR</p>
              <p>Tarp</p>
            </div>
          </div>
        </div>

        <div className={cn(classes.card, classes.broker)}>
          <div className={classes['card-header']}>
            <div>
              <h4>Broker:</h4>

              <div className={classes.red}>Turn Time Transport INC</div>
            </div>

            <div className={classes['review-rate']}>
              <ReviewRate />
            </div>
          </div>

          <div className={classes.column}>
            <p>10 Kamarad St. of 6 Prague CZ 10100</p>

            <div className={classes['two-columns']}>
              <div className={classes['contacts-row']}>
                <PhoneIcon /> <span>+42 215 215 25</span>
              </div>

              <div className={classes['contacts-row']}>
                <MailIcon /> <span>info@ttt.cz</span>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes['card-header']}>
            <h4>Load Details:</h4>
            <p className={classes.red}>Partial</p>
          </div>

          <div className={classes.column}>
            <p className={classes.stat}>
              Weight: <span>20.000 Kg</span>
            </p>

            <p className={classes.stat}>
              Width: <span>2 M</span>
            </p>

            <p className={classes.stat}>
              Length: <span>14 M</span>
            </p>

            <p className={classes.stat}>
              Hight: <span>2 M</span>
            </p>

            <p className={classes.stat}>
              Quantity: <span>6 pz</span>
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes['card-header']}>
            <h4>Special Information:</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
