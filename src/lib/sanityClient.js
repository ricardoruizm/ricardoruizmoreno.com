import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  // 👇 Pega tu Project ID de Sanity aquí
  projectId: '0ypacu1n', 
  dataset: 'ricardoruizmoreno',
  useCdn: true, // `false` si quieres datos siempre frescos
  apiVersion: '2023-05-03', // Usa una fecha de API reciente
})