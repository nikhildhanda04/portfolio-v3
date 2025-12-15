export default function Axios({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 5L5 19M15 5h4v14h-4z"
        stroke="#5A29E4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
       <path d="M5 5l14 14" stroke="#5A29E4" strokeWidth="2" strokeOpacity="0.5"/>
    </svg>
  );
}
