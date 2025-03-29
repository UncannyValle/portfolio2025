import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectGoals',
      title: 'Project Goals',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectOutcome',
      title: 'Project Outcome',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {layout: 'grid'},
    }),
    defineField({
      name: 'repoLink',
      title: 'Repository Link',
      type: 'url',
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    }),
    defineField({
      name: 'skillsUsed',
      title: 'Skills Used',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
