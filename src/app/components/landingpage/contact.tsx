'use client'

import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div id="contact" className="px-6 md:px-44 py-12 md:py-20 flex flex-col md:flex-row gap-12 md:gap-24">
      {/* Left side */}
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold font-primary text-stone-800 dark:text-stone-200">
          Get in Touch
        </h2>
        <p className="font-secondary text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-sm tracking-tighter">
          If you have any inquiries, please feel free to reach out. You can contact me via email at <span className="font-semibold text-stone-800 dark:text-stone-200">nikhildhanda84@gmail.com</span>
        </p>
      </div>

      {/* Right side form */}
      <div className="flex-1 w-full">
        <ContactForm rows={5} />
      </div>
    </div>
  )
}

export default Contact
