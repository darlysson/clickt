'use client'

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
      autoplayDelay={7000}
      easing="linear"
      autoplay
      backwardBtnProps={{ style: { display: 'none' } }}
      forwardBtnProps={{ style: { display: 'none' } }}
    >
      {images[0].homepageImages.map((image) => {
        const url = createURL(image.asset._ref).url()

        return (
          <h1 key={image._key}>teste</h1>
          // <div
          //   key={image._key}
          //  className={`relative h-screen w-screen object-cover object-center flex bg-[url('${url}')]`}
          // >
          //   <div className='flex flex-column'>
          //     <div>
          //       <p>FRAMED EMOTIONAL MEMORIES</p>
          //       <h1>CLICKT</h1>
          //       <h3>
          //         PHOTOGRAPHY & VIDEO
          //         EST. 2010
          //       </h3>
          //     </div>

          //     <div className='absolute left-12 bottom-8'>
          //       <p>CLICKT © All Rights Reserved 2022</p>
          //     </div>
          //   </div>
          // </div>
        )
      })}
    </Carousel>

  )
}
