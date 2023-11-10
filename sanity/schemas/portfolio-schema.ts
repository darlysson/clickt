export const portfolio = {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'weddingContent',
      title: 'Wedding Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'weddingPortugueseContent',
      title: 'Wedding (Portuguese Content)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'portfolioImages',
      title: 'Portfolio Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'ourAimContent',
      title: 'Our Aim',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'ourAimPortugueseContent',
      title: 'Our Aim (Portuguese Content)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'portfolioImages2',
      title: 'Portfolio Images 2',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'thankyouContent',
      title: 'Thank you',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
