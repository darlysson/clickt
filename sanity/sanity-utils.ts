import imageUrlBuilder from '@sanity/image-url'
import { createClient, groq } from 'next-sanity'

const client = createClient({
  apiVersion: '2023-03-04',
  projectId: 'zszt8ra7',
  dataset: 'production',
  useCdn: false,
})

export function createURL(source: string) {
  return imageUrlBuilder(client).image(source)
}

type Image = {
  _key: string
  _type: string
  asset: {
    _ref: string
  }
}

export type Homepage = {
  homepageImages: Image[]
}

export async function fetchHomepageImages(): Promise<Homepage[]> {
  return client.fetch(
    groq`*[_type == "homepage"]{
      _createdAt,
      "homepageImages": homepageImages,
    }`
  )
}
