export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f99bdd13fa1242ccf6ca3a7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-music-blog-studio',
                  apiId: '1d7665a9-788c-4bf7-98b1-b2ec571db3e7'
                },
                {
                  buildHookId: '5f99bdd1c68af12434581fdf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-music-blog',
                  apiId: 'c0252542-2adb-485f-84bc-9fc3e9b5dc98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benhan/sanity-nextjs-music-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-music-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
