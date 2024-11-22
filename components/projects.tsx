'use client'

import { useTranslations } from 'next-intl'

export default function Projects() {
  const t = useTranslations('Projects')

  const projects = [
    { title: 'Project 1', description: t('project1') },
    { title: 'Project 2', description: t('project2') },
    { title: 'Project 3', description: t('project3') },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

