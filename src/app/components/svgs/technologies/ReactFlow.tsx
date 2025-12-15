export default function ReactFlow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 12h16m-16 0c0-4.418 3.582-8 8-8s8 3.582 8 8m-16 0c0 4.418 3.582 8 8 8s8-3.582 8-8"
        stroke="#FF0072"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2" fill="#FF0072" />
    </svg>
  );
}
