import { LogInForm, Logo, MultiFactorAuthInfo } from '@/components'
import { Header } from '@/layouts'

import classes from './LogIn.module.css'

export const LogInPage = () => {
  return (
    <div className={classes['log-in-page']}>
      <Header />

      <div className={classes.content}>
        <div className={classes.left}>
          <Logo className={classes.logo} width={336} height={112} />

          <div className={classes['log-in-form']}>
            <LogInForm />
          </div>
        </div>

        <div className={classes.right}>
          <MultiFactorAuthInfo />
        </div>
      </div>
    </div>
  )
}
