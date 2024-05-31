import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import cn from 'classnames'

import { NewsArticle } from '@/components'
import classes from './News.module.css'

import 'swiper/css'
import 'swiper/css/navigation'
import ChevronDownIcon from '@/assets/icons/arrow-right.svg?react'
import articlePreviewSrc1 from '@/assets/img/placeholder/news/article-1.png'
import articlePreviewSrc2 from '@/assets/img/placeholder/news/article-2.png'
import articlePreviewSrc3 from '@/assets/img/placeholder/news/article-3.png'

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

export const NewsPage = () => {
  const articles = [
    {
      title:
        'Sudden container crunch sends ocean freight rates soaring, setting off global trade alarm bells',
      description:
        'A perfect storm in global trade is creating a shipping container  capacity crunch, fueling a sudden and surprise spike in ocean freight  rates.',
      previewImage: articlePreviewSrc1,
      date: new Date()
    },
    {
      title:
        'Norfolk Southern agrees to $310 million federal settlement over Ohio train derailment',
      description:
        'Norfolk Southern has agreed to pay $310 million to settle charges over a toxic train derailment in East Palestine, Ohio, in February 2023, the company announced on Thursday.',
      previewImage: articlePreviewSrc2,
      date: new Date()
    },
    {
      title:
        'Autos giant Peugeot is trialing driverless tech — with a twist — for Amazon-style deliveries',
      description:
        'The idea is to recreate the journey a delivery vehicle typically takes from an order fulfillment center to households or businesses, similar to the widely-known model already offered by Amazon — only this time with remote-controlled cars.',
      previewImage: articlePreviewSrc3,
      date: new Date()
    },
    {
      title:
        'Sudden container crunch sends ocean freight rates soaring, setting off global trade alarm bells 1',
      description:
        'A perfect storm in global trade is creating a shipping container  capacity crunch, fueling a sudden and surprise spike in ocean freight  rates.',
      previewImage: articlePreviewSrc1,
      date: new Date()
    },
    {
      title:
        'Norfolk Southern agrees to $310 million federal settlement over Ohio train derailment 2',
      description:
        'Norfolk Southern has agreed to pay $310 million to settle charges over a toxic train derailment in East Palestine, Ohio, in February 2023, the company announced on Thursday.',
      previewImage: articlePreviewSrc2,
      date: new Date()
    },
    {
      title:
        'Autos giant Peugeot is trialing driverless tech — with a twist — for Amazon-style deliveries 3',
      description:
        'The idea is to recreate the journey a delivery vehicle typically takes from an order fulfillment center to households or businesses, similar to the widely-known model already offered by Amazon — only this time with remote-controlled cars.',
      previewImage: articlePreviewSrc3,
      date: new Date()
    }
  ]

  return (
    <div className={classes['news-page']}>
      <h1>NEWS</h1>

      <div className={classes['articles-slider']}>
        <Swiper
          loop
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 24
            },
            792: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            1378: {
              slidesPerView: 3,
              spaceBetween: 24
            }
          }}
        >
          {articles.map(({ title, description, previewImage, date }) => {
            return (
              <SwiperSlide key={title}>
                <NewsArticle
                  title={title}
                  description={description}
                  previewImage={previewImage}
                  date={date}
                />
              </SwiperSlide>
            )
          })}

          <NavButton />
        </Swiper>
      </div>
    </div>
  )
}
