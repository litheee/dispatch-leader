import { Link } from 'react-router-dom'

import { Button } from '@/ui'

import { ROUTE_NAMES } from '@/core/routes'

import classes from './FeaturePage.module.css'
import CheckmarkIcon from '@/assets/icons/checkmark.svg?react'

type SignUpTexts = {
  title: string
  description: string
}

type Feature = {
  title: string
  text: string
}

type FeaturePageLayoutProps = {
  title: string
  features: Feature[]
  image: string
  signUpTexts: SignUpTexts
}

export const FeaturePageLayout = ({
  title,
  features,
  image,
  signUpTexts
}: FeaturePageLayoutProps) => {
  return (
    <div className={classes['feature-page-layout']}>
      <div className={classes.features}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>

        <h1>{title}</h1>

        <ul className={classes['features-list']}>
          {features.map(({ title, text }) => {
            return (
              <li key={title}>
                <h4>
                  <CheckmarkIcon /> {title}
                </h4>

                <p>{text}</p>
              </li>
            )
          })}
        </ul>
      </div>

      <div className={classes['sign-up-block']}>
        <h2>{signUpTexts.title}</h2>

        <Link to={ROUTE_NAMES.LOG_IN}>
          <Button>Sign Up</Button>
        </Link>

        <p>{signUpTexts.description}</p>
      </div>
    </div>
  )
}
