import { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LOGISTICS_SLIDES } from '@/constants/logistics'
import { SLIDE_GAP_REM } from '@/constants/layout'
import { LogisticsIcon } from '@/icons/logistics'
import styles from './LogisticsSlider.module.css'

import 'swiper/css'

const AUTO_PLAY_DELAY = 2800

function getSlideGapPx() {
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
  return rootFontSize * SLIDE_GAP_REM
}

export default function LogisticsSlider() {
  const [spaceBetween, setSpaceBetween] = useState(getSlideGapPx)

  useEffect(() => {
    const updateGap = () => setSpaceBetween(getSlideGapPx())
    updateGap()
    window.addEventListener('resize', updateGap)
    return () => window.removeEventListener('resize', updateGap)
  }, [])

  return (
    <div className={styles.slider}>
      <Swiper
        className={styles.swiper}
        modules={[Autoplay]}
        slidesPerView={1.15}
        slidesPerGroup={1}
        spaceBetween={spaceBetween}
        loop
        speed={550}
        autoplay={{
          delay: AUTO_PLAY_DELAY,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          1280: {
            slidesPerView: 5,
            slidesPerGroup: 1,
          },
        }}
        aria-label="Logistics capabilities"
      >
        {LOGISTICS_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.swiperSlide}>
            <div className={styles.slide}>
              <LogisticsIcon type={slide.icon} className={styles.icon} />
              <span className={styles.label}>{slide.label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
