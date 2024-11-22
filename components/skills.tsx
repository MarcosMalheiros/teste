'use client'

import { useTranslations } from 'next-intl'

export default function Skills() {
  const t = useTranslations('Skills')

  const skills = [
    'Node.js', 'Python', 'Java', 'SQL', 'MongoDB', 'Redis',
    'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'RESTful APIs', 'GraphQL'
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-center">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

