export default function Vite({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.5 4.5l-9.5 17-9.5-17h3l6.5 11.5 6.5-11.5h3z"
        fill="#FFD21A" // Base yellow
      />
      <path
        d="M12 21.5l-6.5-11.5-2.5-4.5h3l6 10.5 6-10.5h3l-2.5 4.5-6.5 11.5z"
         fill="url(#vite-grad)"
      />
       <defs>
        <linearGradient id="vite-grad" x1="12" y1="21.5" x2="12" y2="5.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BD34FE" />
          <stop offset="1" stopColor="#41D1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
