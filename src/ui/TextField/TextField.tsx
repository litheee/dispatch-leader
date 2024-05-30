import cn from 'classnames'
import { InputHTMLAttributes } from 'react'

import classes from './TextField.module.css'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>

export const TextField = ({ className, ...props }: TextFieldProps) => {
  return <input {...props} className={cn(classes['text-field'], className)} />
}
