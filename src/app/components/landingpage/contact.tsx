'use client'

import React from 'react'

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
        <form className="flex flex-col gap-4 font-secondary tracking-tighter" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-transparent border border-stone-300 dark:border-stone-800 rounded-md px-4 py-3 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:border-stone-500 dark:focus:border-stone-500 transition-colors"
            />
            <input 
              type="tel" 
              placeholder="Phone No" 
              className="w-full bg-transparent border border-stone-300 dark:border-stone-800 rounded-md px-4 py-3 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:border-stone-500 dark:focus:border-stone-500 transition-colors"
            />
          </div>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-transparent border border-stone-300 dark:border-stone-800 rounded-md px-4 py-3 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:border-stone-500 dark:focus:border-stone-500 transition-colors"
          />
          <textarea 
            placeholder="Message" 
            rows={5}
            className="w-full bg-transparent border border-stone-300 dark:border-stone-800 rounded-md px-4 py-3 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:border-stone-500 dark:focus:border-stone-500 transition-colors resize-none"
          />
          <button 
            type="submit"
            className="w-full bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 font-semibold rounded-md px-4 py-3 mt-2 hover:opacity-90 transition-opacity"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
