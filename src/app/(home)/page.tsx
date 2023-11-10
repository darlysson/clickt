import Slider from '@/components/Slider';
import { fetchHomepageImages } from "../../../sanity/sanity-utils";

export default async function Home() {
  const images = await fetchHomepageImages();

  return (
    <Slider images={images} />
  )
}
