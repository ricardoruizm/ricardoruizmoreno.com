import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Blog Ricardo Ruiz Moreno',

  projectId: '0ypacu1n',
  dataset: 'ricardoruizmoreno',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
