export default {
  // Nombre para el API (debe ser único, sin espacios ni mayúsculas)
  name: 'pressArticle',
  // Nombre visible en el panel de Sanity
  title: 'Artículo de Prensa',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título del Artículo',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (esto crea la URL amigable)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descripción Corta (para vistas previas y SEO)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Contenido Completo del Artículo',
      type: 'blockContent', // Este es el editor de texto enriquecido
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}