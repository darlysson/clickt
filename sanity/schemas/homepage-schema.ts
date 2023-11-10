export const homepage = {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'homepageImages',
      title: 'Homepage Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}
