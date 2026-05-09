'use client'

import React, { useState } from 'react'
import { Loader2, Check, AlertCircle } from 'lucide-react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface ContactFormProps {
  rows?: number
}

export default function ContactForm({ rows = 5 }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.')
      }

      setStatus('success')
      setFormData({ name: '', phone: '', email: '', message: '' })

      // Reset to idle after 4 seconds
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message.')

      // Reset to idle after 4 seconds
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputClasses =
    'w-full bg-transparent border border-stone-300 dark:border-stone-800 rounded-md px-4 py-3 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:border-stone-500 dark:focus:border-stone-500 transition-colors placeholder:text-stone-400 dark:placeholder:text-stone-600'

  return (
    <form className="flex flex-col gap-4 font-secondary tracking-tighter" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClasses}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone No"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className={inputClasses}
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={rows}
        value={formData.message}
        onChange={handleChange}
        required
        className={`${inputClasses} resize-none`}
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`
          w-full font-semibold rounded-md px-4 py-3 mt-2 transition-all duration-300 flex items-center justify-center gap-2
          ${status === 'success'
            ? 'bg-emerald-600 text-white'
            : status === 'error'
              ? 'bg-red-600 text-white'
              : 'bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 hover:opacity-90'
          }
          ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}
        `}
      >
        {status === 'loading' && (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        )}
        {status === 'success' && (
          <>
            <Check className="w-4 h-4" />
            Message Sent!
          </>
        )}
        {status === 'error' && (
          <>
            <AlertCircle className="w-4 h-4" />
            {errorMessage || 'Failed to send'}
          </>
        )}
        {status === 'idle' && 'Submit'}
      </button>
    </form>
  )
}
