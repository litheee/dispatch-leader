import classes from './Select.module.css'
import ChevronDown from '@/assets/icons/chevron-down.svg?react'

type SelectProps = {
  label: string
}

export const Select = ({ label }: SelectProps) => {
  return (
    <button className={classes.select}>
      {label} <ChevronDown />
    </button>
  )
}
