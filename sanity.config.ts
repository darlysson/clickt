import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemas'

export const config = defineConfig({
  name: 'default',
  title: 'Clickt',
  projectId: `${process.env.SANITY_PROJECT_ID}`,
  dataset: 'production',
  basePath: '/admin',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
