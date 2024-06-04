import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import cn from 'classnames'

import { RouteCountries } from '../RouteCountries/RouteCountries'

import 'swiper/css'
import 'swiper/css/navigation'
import classes from './RouteCountriesCarousel.module.css'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'
import PlusCircleIcon from '@/assets/icons/plus-circle.svg?react'

const NavButton = () => {
  const swiper = useSwiper()

  return (
    <>
      <button
        className={cn(classes['nav-button'], classes['nav-button-prev'])}
        onClick={() => swiper.slidePrev()}
      >
        <ChevronDownIcon />
      </button>

      <button
        className={cn(classes['nav-button'], classes['nav-button-next'])}
        onClick={() => swiper.slideNext()}
      >
        <ChevronDownIcon />
      </button>
    </>
  )
}

export const RouteCountriesCarousel = () => {
  return (
    <div className={classes['route-countries-carousel']}>
      <Swiper loop slidesPerView={4} spaceBetween={0}>
        {Array.from({ length: 8 }).map((_, idx) => {
          return (
            <SwiperSlide key={idx}>
              {({ isActive }) => {
                return <RouteCountries active={isActive} />
              }}
            </SwiperSlide>
          )
        })}

        <NavButton />
      </Swiper>

      <button className={classes['new-route-button']}>
        <PlusCircleIcon />
      </button>
    </div>
  )
}
