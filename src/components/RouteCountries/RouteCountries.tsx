import cn from 'classnames'

import classes from './RouteCountries.module.css'
import ArrowRightIcon from '@/assets/icons/arrow-right.svg?react'
import MoreIcon from '@/assets/icons/more.svg?react'
import CrossIcon from '@/assets/icons/cross.svg?react'

type RouteCountriesProps = {
  active?: boolean
}

export const RouteCountries = ({ active }: RouteCountriesProps) => {
  return (
    <div
      className={cn(classes['route-countries'], {
        [classes.active]: active
      })}
    >
      <span>
        Memphis, TN <ArrowRightIcon width={16} height={16} />
      </span>

      <span>Anyware</span>

      <div className={classes.actions}>
        <button>
          <MoreIcon />
        </button>

        <button>
          <CrossIcon />
        </button>
      </div>
    </div>
  )
}
