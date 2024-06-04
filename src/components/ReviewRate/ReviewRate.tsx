import classes from './ReviewRate.module.css'
import ThumbUpIcon from '@/assets/icons/thumb-up.svg?react'

export const ReviewRate = () => {
  return (
    <div className={classes['review-rate']}>
      <span>Since 2019</span>

      <span className={classes.rating}>
        <ThumbUpIcon /> 98% (1237)
      </span>
    </div>
  )
}
