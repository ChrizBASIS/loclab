import { defineField, defineType } from 'sanity'

export const workPackage = defineType({
  name: 'workPackage',
  title: 'Work Package (Gantt)',
  type: 'document',
  fields: [
    defineField({
      name: 'wpNumber',
      title: 'WP Number (e.g. "WP 1")',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description / Milestones',
      type: 'localeString',
    }),
    defineField({
      name: 'startMonth',
      title: 'Start Month (1-36)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(36)
    }),
    defineField({
      name: 'endMonth',
      title: 'End Month (1-36)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(36)
    }),
    defineField({
      name: 'phase',
      title: 'Project Phase (1-4)',
      type: 'number',
      options: {
        list: [1, 2, 3, 4]
      }
    })
  ],
  preview: {
    select: {
      title: 'wpNumber',
      subtitle: 'title.de'
    }
  }
})
