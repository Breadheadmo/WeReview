

interface CarInspectProLogoProps {
  className?: string;
  textClassName?: string;
}

const CarInspectProLogo = ({ className = '', textClassName = 'text-white' }: CarInspectProLogoProps) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    {/* Logo Icon: stylized shield with checkmark */}
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="30" height="30" rx="8" fill="#16A34A" />
      <path d="M12 18l5 5 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 6c5.5 0 10 2.5 10 7.5v6c0 5-4.5 7.5-10 7.5s-10-2.5-10-7.5v-6C8 8.5 12.5 6 18 6z" stroke="#fff" strokeWidth="2" fill="none" />
    </svg>
    <span className={`text-xl font-bold ${textClassName}`}>WeReview</span>
  </div>
);

export default CarInspectProLogo;
