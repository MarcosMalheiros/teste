'use client'

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-4">
      <div className="container mx-auto px-6 text-center">
        <p>{t('copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  )
}

