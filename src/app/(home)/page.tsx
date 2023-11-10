import Image from 'next/image';
import { createURL, fetchHomepageImages } from "../../../sanity/sanity-utils";

export default async function Home() {
  const images = await fetchHomepageImages();

  return (
    <div>
      {images[0].homepageImages.map((image) => {
        return (
          <Image
            key={image._key}
            alt=""
            src={createURL(image.asset._ref).url()}
            width={500}
            height={700}
            className='h-full'
          />
        )
      })}
    </div>
  )
}
