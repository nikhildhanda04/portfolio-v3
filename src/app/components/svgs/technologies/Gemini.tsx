export default function Gemini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M21.6 10.8c-5.4 0-10.8-5.4-10.8-10.8 0 5.4-5.4 10.8-10.8 10.8 5.4 0 10.8 5.4 10.8 10.8 0-5.4 5.4-10.8 10.8-10.8z"
        fill="url(#gemini-gradient)"
      />
      <path
         d="M16 19.5c-2.5 0-4.5-2-4.5-4.5 0 2.5-2 4.5-4.5 4.5 2.5 0 4.5 2 4.5 4.5 0-2.5 2-4.5 4.5-4.5z"
         fill="url(#gemini-gradient)"
         opacity="0.8"
      />
      <defs>
        <linearGradient
          id="gemini-gradient"
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4E8CF7" />
          <stop offset="1" stopColor="#D483FC" />
        </linearGradient>
      </defs>
    </svg>
  );
}
