import { config, collection, fields, singleton } from '@keystatic/core';

export default config({
  // Local storage writes content into this repo. To let editors manage content
  // on the live site, switch this to:
  //   storage: { kind: 'github', repo: 'sperl755/haltchildabuseorg' }
  // and set up the Keystatic GitHub App (see README).
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'Halt Child Abuse' },
  },
  collections: {
    episodes: collection({
      label: 'Interview episodes',
      slugField: 'title',
      path: 'src/content/episodes/*',
      format: { data: 'yaml' },
      columns: ['title', 'interviewee', 'date'],
      entryLayout: 'form',
      schema: {
        title: fields.slug({
          name: { label: 'Title', validation: { length: { min: 1 } } },
          slug: { label: 'URL slug (auto)' },
        }),
        interviewee: fields.text({
          label: 'Person interviewed',
          validation: { length: { min: 1 } },
        }),
        role: fields.text({
          label: 'Their role or background',
          description: 'e.g. "Child psychologist, 20 years in family trauma"',
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        thumbnail: fields.image({
          label: 'Photo',
          description: 'The cover image for this interview.',
          directory: 'public/images/episodes',
          publicPath: '/images/episodes/',
        }),
        youtubeUrl: fields.url({
          label: 'YouTube link',
          description: 'Full link to the video on YouTube.',
        }),
        length: fields.text({
          label: 'Length',
          description: 'e.g. "38 min"',
        }),
        date: fields.date({
          label: 'Published date',
          description: 'Used to order episodes (newest first).',
        }),
        featured: fields.checkbox({
          label: 'Feature this episode',
          description: 'Show this one large at the top of the series section.',
          defaultValue: false,
        }),
      },
    }),
  },
  singletons: {
    homepage: singleton({
      label: 'Home page content',
      path: 'src/content/homepage/',
      format: { data: 'yaml' },
      schema: {
        warningSigns: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            body: fields.text({ label: 'Description', multiline: true }),
          }),
          {
            label: 'Warning signs',
            description: 'Cards in the "Recognizing the signs" section.',
            itemLabel: (props) => props.fields.title.value || 'Untitled sign',
          }
        ),
        helpSteps: fields.array(
          fields.object({
            heading: fields.text({ label: 'Heading' }),
            body: fields.text({ label: 'Description', multiline: true }),
          }),
          {
            label: 'What to do steps',
            description: 'The numbered steps in the "Get help" section.',
            itemLabel: (props) => props.fields.heading.value || 'Untitled step',
          }
        ),
        missionStats: fields.array(
          fields.object({
            number: fields.text({ label: 'Number', description: 'e.g. "1 in 7"' }),
            label: fields.text({ label: 'Label', multiline: true }),
          }),
          {
            label: 'Mission stats',
            description: 'The three figures in the "Our mission" section.',
            itemLabel: (props) => props.fields.number.value || 'Stat',
          }
        ),
      },
    }),
  },
});
