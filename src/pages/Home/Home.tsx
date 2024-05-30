import { FeaturesList } from '@/components'

import classes from './Home.module.css'

export const HomePage = () => {
  return (
    <div className={classes['home-page']}>
      <FeaturesList />
    </div>
  )
}
