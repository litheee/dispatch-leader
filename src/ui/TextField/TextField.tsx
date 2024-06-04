import cn from 'classnames'
import { InputHTMLAttributes } from 'react'

import classes from './TextField.module.css'

type TextFieldProps = {
  label?: string
  endAdornment?: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({ className, label, endAdornment, ...props }: TextFieldProps) => {
  return (
    <div className={cn(classes['text-field'], className)}>
      <input placeholder={label} {...props} className={classes.input} />

      {label ? <label className={classes.label}>{label}</label> : null}

      {endAdornment ? <span className={classes['end-adornment']}>{endAdornment}</span> : null}
    </div>
  )
}
