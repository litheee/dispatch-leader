import classes from './Badge.module.css'
import CrossCircleIcon from '@/assets/icons/cross-circle.svg?react'

type BadgeProps = {
  children: React.ReactNode
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <div className={classes.badge}>
      {children}

      <button>
        <CrossCircleIcon />
      </button>
    </div>
  )
}
