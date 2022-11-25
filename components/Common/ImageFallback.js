import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

export default function ImageFallback({ src, fallbackSrc, alt, ...rest }) {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      class="lazyload"
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          setImgSrc(fallbackSrc)
        }
      }}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
    </Swiper>
  )
}
