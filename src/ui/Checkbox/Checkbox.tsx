import { InputHTMLAttributes, useState } from 'react'
import cn from 'classnames'

import classes from './Checkbox.module.css'
import CheckboxCheckedIcon from '@/assets/icons/checkbox-checked.svg?react'
import CheckboxUncheckedIcon from '@/assets/icons/checkbox-unchecked.svg?react'

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <label className={classes.label}>
      <input
        checked={checked}
        onChange={() => {
          setChecked((prev) => !prev)
        }}
        {...props}
        type='checkbox'
        className={cn(classes.checkbox, className)}
      />

      <span className={classes.checkmark}>
        {checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
      </span>
    </label>
  )
}
