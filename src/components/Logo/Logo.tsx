import { Link } from 'react-router-dom'
import cn from 'classnames'

import { ROUTE_NAMES } from '@/core/routes'

import classes from './Logo.module.css'
import LogoImg from '@/assets/img/logo.svg?react'
import LogoWhiteImg from '@/assets/img/logo-white.svg?react'

type Color = 'classic' | 'white'

type LogoProps = {
  width?: number
  height?: number
  color?: Color
  className?: string
}

export const Logo = ({ color = 'classic', width = 192, height = 64, className }: LogoProps) => {
  return (
    <Link to={ROUTE_NAMES.HOME} className={cn(classes.logo, className)}>
      {color === 'classic' ? <LogoImg width={width} height={height} /> : null}
      {color === 'white' ? <LogoWhiteImg /> : null}
    </Link>
  )
}
