import { AboutUsCards } from '@/components'

import classes from './AboutUs.module.css'

export const AboutUsPage = () => {
  return (
    <div>
      <h1>About us:</h1>

      <div className={classes.cards}>
        <AboutUsCards />
      </div>
    </div>
  )
}
