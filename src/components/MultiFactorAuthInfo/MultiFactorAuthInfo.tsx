import { Link } from 'react-router-dom'

import { Button } from '@/ui'

import { ROUTE_NAMES } from '@/core/routes'

import classes from './MultiFactorAuthInfo.module.css'

export const MultiFactorAuthInfo = () => {
  return (
    <div className={classes['multi-factor-auth']}>
      <h2>ENHANCING OUR SECURITY MEASURES.</h2>

      <div className={classes.content}>
        <p>Your account security is getting an upgrade.</p>

        <p>
          To further protect your account, we are implementing Multi-Factor Authentication (MFA).
        </p>

        <p>
          Each time you sign in from a new or unfamiliar device, you'll need to confirm your
          identity. Choose your preferred method of verification from the following options:
        </p>

        <ul>
          <li>Push notification sent to your mobile device</li>
          <li>Security code from an authentication app</li>
          <li>Biometric verification, such as facial recognition or fingerprint</li>
        </ul>
      </div>

      <div className={classes['additional-assistance']}>
        <div className={classes['additional-assistance-left']}>
          <p>Need additional assistance?</p>
          <p>Contact our support team.</p>
        </div>

        <Link to={ROUTE_NAMES.HOME}>
          <Button size='medium'>Life Support</Button>
        </Link>
      </div>
    </div>
  )
}
