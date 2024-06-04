import classes from './Rating.module.css'
import StarIcon from '@/assets/icons/star.svg?react'

export const Rating = () => {
  return (
    <div className={classes.rating}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <StarIcon key={idx} />
      ))}
    </div>
  )
}
