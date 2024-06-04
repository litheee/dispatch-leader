import { Button } from '@/ui'

import classes from './RouteCard.module.css'
import CalendarIcon from '@/assets/icons/calendar-2.svg?react'
import TruckSizeIcon from '@/assets/icons/truck-size.svg?react'
import TruckIcon from '@/assets/icons/truck.svg?react'
import WeightIcon from '@/assets/icons/weight.svg?react'
import MapMarkersIcon from '@/assets/icons/map-markers.svg?react'
import OptionsIcon from '@/assets/icons/options.svg?react'
import StarIcon from '@/assets/icons/star.svg?react'
import CrossIcon from '@/assets/icons/cross.svg?react'

export const RouteCard = () => {
  return (
    <div className={classes['route-card']}>
      <div className={classes.top}>
        <div className={classes['top-left']}>
          <p>Hamburg, DE</p>
          <p>Asti, IT</p>
        </div>

        <div className={classes['top-right']}>
          <p className={classes.price}>€3,000</p>
          <p>RPKM:€1.5</p>
        </div>
      </div>

      <div className={classes.content}>
        <div>
          <p>
            <CalendarIcon />
            <span>16/04/2024</span>
          </p>

          <p>
            <TruckIcon />
            <span>F</span>
          </p>

          <p>
            <MapMarkersIcon />
            <span>1 523</span>
          </p>
        </div>

        <div>
          <p>
            <TruckSizeIcon />
            <span>12</span>
          </p>

          <p>
            <WeightIcon />
            <span>22 000</span>
          </p>

          <p>
            <OptionsIcon />
            <span>ADR</span>
          </p>
        </div>
      </div>

      <div className={classes.bottom}>
        <Button size='medium'>Book It Now</Button>

        <div className={classes['bottom-right']}>
          <button>
            <StarIcon />
          </button>

          <button>
            <CrossIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
