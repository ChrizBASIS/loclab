export const localeString = {
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: [
    {
      title: 'German',
      name: 'de',
      type: 'string',
    },
    {
      title: 'English',
      name: 'en',
      type: 'string',
    },
    {
      title: 'Italian',
      name: 'it',
      type: 'string',
    }
  ],
  preview: {
    select: {
      title: 'de'
    }
  }
}
