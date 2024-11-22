'use client'

import { NextIntlClientProvider } from 'next-intl'
import { useEffect, useState } from 'react'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState(null)

  useEffect(() => {
    fetch('/messages.json')
      .then((response) => response.json())
      .then((data) => setMessages(data))
  }, [])

  if (!messages) {
    return null
  }

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

