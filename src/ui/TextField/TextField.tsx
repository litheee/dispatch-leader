import cn from 'classnames'
import { InputHTMLAttributes } from 'react'

import classes from './TextField.module.css'

type TextFieldProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({ className, label, ...props }: TextFieldProps) => {
  return (
    <div className={classes['text-field']}>
      <input placeholder={label} {...props} className={cn(classes.input, className)} />
      <label className={classes.label}>{label}</label>
    </div>
  )
}
