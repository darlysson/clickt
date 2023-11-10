export const contact = {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    },
    {
      name: 'getStartedImage',
      title: 'Get Started Image',
      type: 'image',
    },
    {
      name: 'socialImages',
      title: 'Social Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}
