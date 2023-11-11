import { fetchHomepageImages } from "../../../sanity/sanity-utils";
import { css } from '../../../styled-system/css';

export default async function Home() {
  const images = await fetchHomepageImages();

  return (
    <div className={css({ fontSize: "2xl", fontWeight: 'bold', })}>Hello 🐼!</div>
    // <Slider images={images} />
  )
}
