import { Link } from 'react-router-dom'

import { Button } from '@/ui'

import { ROUTE_NAMES } from '@/core/routes'

import classes from './FeaturesList.module.css'

import LogoIcon from '@/assets/img/logo-icon.svg?react'

type Feature = {
  label: string
  description: string
  href: string
}

export const FeaturesList = () => {
  const features: Feature[] = [
    {
      label: 'Carriers',
      description: 'Discover Your Transport Potential',
      href: ROUTE_NAMES.CARRIERS
    },
    {
      label: 'Brokers',
      description: 'Unlock Your Opportunities',
      href: ROUTE_NAMES.BROKERS
    },
    {
      label: 'Shippers',
      description: 'Explore Your Shipping Solutions',
      href: ROUTE_NAMES.SHIPPERS
    }
  ]

  return (
    <ul className={classes['features-list']}>
      {features.map(({ label, description, href }) => {
        return (
          <li key={label} className={classes['feature-item']}>
            <LogoIcon />

            <h2>{label}</h2>

            <p>{description}</p>

            <Link to={href}>
              <Button>Apply</Button>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
