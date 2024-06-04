import { useState } from 'react'

import { ReviewRate } from '../ReviewRate/ReviewRate'
import { Button, Checkbox, TextField } from '@/ui'

import classes from './NewOfferForm.module.css'
import WarningIcon from '@/assets/icons/warning.svg?react'
import CalendarIcon from '@/assets/icons/calendar.svg?react'

export const NewOfferForm = () => {
  const [step, setStep] = useState(0)

  if (step === 0) {
    return (
      <div className={classes['new-offer-form']}>
        <div className={classes.header}>
          <div className={classes['header-left']}>
            <h4>New Offer:</h4>
            <p className={classes['company-name']}>Eu trans ltd</p>

            <div className={classes.taxes}>
              <span>VAT: 025487</span>
              <span>License: BG025487</span>
            </div>

            <p>Contact Name: Michael Armin</p>
            <p>Pick Up Date: 12/04/2025</p>
            <p>Delivery Date: 15/04/2025</p>
          </div>

          <div className={classes['header-right']}>
            <ReviewRate />
          </div>
        </div>

        <div className={classes.content}>
          <div className={classes.field}>
            <label htmlFor='price'>Offered Price:</label>
            <TextField
              id='price'
              className={classes['text-field']}
              value='1500 €'
              endAdornment={<span className={classes['field-end-adornment']}>1.5€/km</span>}
            />
            <p>To place a bid, change the price:</p>
          </div>

          <p className={classes.warning}>
            <WarningIcon /> Review Shipper <br /> requirements:
          </p>

          <Button
            fullWidth
            size='medium'
            className={classes['new-offer-button']}
            onClick={() => {
              setStep(1)
            }}
          >
            Send New Offer
          </Button>

          <div className={classes['accept-decline-buttons']}>
            <Button fullWidth size='medium'>
              Accept
            </Button>

            <Button fullWidth size='medium' variant='outlined'>
              Decline
            </Button>
          </div>

          <p className={classes.waiver}>
            By clicking this button, you are agreeing to our standard waiver
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={classes['new-offer-form']}>
      <div className={classes.header}>
        <h4>Request:</h4>
      </div>

      <div className={classes.content}>
        <p className={classes['terms-conditions']}>
          View <a href='#'>Terms and Conditions</a>
        </p>

        <label className={classes.agreement}>
          <Checkbox /> I have read and agree with above T&C
        </label>

        <div className={classes.field}>
          <label htmlFor='contactName'>Contact Name:</label>
          <TextField id='contactName' className={classes['text-field']} type='text' />
        </div>

        <div className={classes['date-fields']}>
          <div className={classes.field}>
            <label htmlFor='pickUpDate'>Pick Up Date:</label>

            <TextField
              id='pickUpDate'
              className={classes['text-field']}
              type='date'
              endAdornment={<CalendarIcon />}
            />
          </div>

          <div className={classes.field}>
            <label htmlFor='deliveryDate'>Delivery Date:</label>

            <TextField
              id='deliveryDate'
              className={classes['text-field']}
              type='date'
              endAdornment={<CalendarIcon />}
            />
          </div>
        </div>

        <div className={classes.field}>
          <label htmlFor='price'>Offered Price:</label>
          <TextField
            id='price'
            className={classes['text-field']}
            value='1500 €'
            endAdornment={<span className={classes['field-end-adornment']}>1.5€/km</span>}
          />
          <p>To place a bid, change the price:</p>
        </div>

        <p className={classes.warning}>
          <WarningIcon /> Review Shipper <br /> requirements:
        </p>

        <Button
          className={classes['send-request-button']}
          size='medium'
          variant='outlined'
          onClick={() => {
            setStep(0)
          }}
        >
          Send €1500 Request
        </Button>

        <p className={classes.waiver}>
          By clicking this button, you are agreeing to our standard waiver
        </p>
      </div>
    </div>
  )
}
