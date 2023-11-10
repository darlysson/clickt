'use client'

import Image from 'next/image';
import { useState } from 'react';
import Carousel from 'react-simply-carousel';
import { Homepage, createURL } from '../../sanity/sanity-utils';

type Props = {
  images: Homepage[]
}

export default function Slider({ images }: Props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Carousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      speed={3000}
      autoplayDelay={6000}
      easing="linear"
      autoplay
      backwardBtnProps={{ style: { display: 'none' } }}
      forwardBtnProps={{ style: { display: 'none' } }}
    >
      {images[0].homepageImages.map((image) => {
        return (
          <Image
            key={image._key}
            alt=""
            src={createURL(image.asset._ref).url()}
            width={1700}
            height={700}
            style={{
              height: '100vh', width: '100vw', objectPosition: 'center', objectFit: 'cover', display: 'flex'
            }}
          />
        )
      })}
    </Carousel>

  )
}
