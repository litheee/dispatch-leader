import cn from 'classnames'
import { InputHTMLAttributes } from 'react'

import classes from './Textarea.module.css'

type TextareaProps = {
  label?: string
  endAdornment?: React.ReactNode
  textareaClassName?: string
} & InputHTMLAttributes<HTMLTextAreaElement>

export const Textarea = ({
  className,
  label,
  endAdornment,
  textareaClassName,
  ...props
}: TextareaProps) => {
  return (
    <div className={cn(classes['textarea-field'], className)}>
      <textarea
        placeholder={label}
        {...props}
        className={cn(classes.textarea, textareaClassName)}
      />

      {label ? <label className={classes.label}>{label}</label> : null}

      {endAdornment ? <span className={classes['end-adornment']}>{endAdornment}</span> : null}
    </div>
  )
}
