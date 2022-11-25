import Image from 'next/image'
import { useEffect, useState } from 'react'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'

export default function ImageFallback({ src, fallbackSrc, alt, ...rest }) {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Fancybox>
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
    </Fancybox>
  )
}
