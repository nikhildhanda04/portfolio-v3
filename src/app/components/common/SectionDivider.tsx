'use client'

import React from 'react'

const SectionDivider = () => {
  return (
    <div className="w-full h-8 overflow-hidden">
      <div 
        className="w-full h-full opacity-10 dark:opacity-20"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            currentColor,
            currentColor 1px,
            transparent 1px,
            transparent 12px
          )`
        }}
      />
    </div>
  )
}

export default SectionDivider
