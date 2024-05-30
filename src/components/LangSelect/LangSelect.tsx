import { Button } from '@/ui'

import classes from './LangSelect.module.css'
import TriangleDownIcon from '@/assets/icons/triangle-down.svg?react'

export const LangSelect = () => {
  return (
    <Button variant='text' size='small' className={classes['lang-select-button']}>
      EN <TriangleDownIcon />
    </Button>
  )
}
