'use client'

import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('About')

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
        <div className="max-w-2xl mx-auto">
          <p className="mb-4">{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
        </div>
      </div>
    </section>
  )
}

