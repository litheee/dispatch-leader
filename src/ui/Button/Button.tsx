import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import classes from './Button.module.css'

type Size = 'large' | 'medium' | 'small'
type Variant = 'contained' | 'outlined' | 'text'

type ButtonProps = {
  size?: Size
  variant?: Variant
  fullWidth?: boolean
  asLink?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  size = 'large',
  variant = 'contained',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={cn(classes.button, className, {
        [classes[`size-${size}`]]: true,
        [classes[`variant-${variant}`]]: true,
        [classes['full-width']]: Boolean(fullWidth)
      })}
      {...props}
    />
  )
}
