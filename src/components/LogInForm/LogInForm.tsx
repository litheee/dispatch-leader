import { Link } from 'react-router-dom'

import { Button, Checkbox, TextField } from '@/ui'

import { ROUTE_NAMES } from '@/core/routes'

import classes from './LogInForm.module.css'

export const LogInForm = () => {
  return (
    <form className={classes['log-in-form']}>
      <h1>Log in</h1>
      <p>to your account</p>

      <div className={classes['field-row']}>
        <Link to={ROUTE_NAMES.HOME}>Forgot your username?</Link>
        <TextField name='username' placeholder='Username/Email' />
      </div>

      <div className={classes['field-row']}>
        <Link to={ROUTE_NAMES.HOME}>Reset password</Link>
        <TextField name='password' placeholder='Password' />
      </div>

      <div className={classes['checkbox-row']}>
        <label>
          <Checkbox /> Remember me
        </label>
      </div>

      <Button type='submit' fullWidth>
        Log In
      </Button>

      <p>
        By continuing you agree to our <Link to={ROUTE_NAMES.HOME}>Terms and Conditions.</Link>{' '}
      </p>
    </form>
  )
}
