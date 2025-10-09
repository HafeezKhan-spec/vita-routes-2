import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type Props = {
  className?: string;
  to?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

// Shared "BOOK A CALL" button with black/white/orange theme and boxy style.
// If `onClick` is provided, renders a Button; otherwise renders a Link to `to` (default `/contact`).
const baseClasses =
  'inline-flex items-center justify-center bg-black text-white font-semibold border-2 border-orange-500 px-6 py-3 rounded-none transition-all duration-300 ease-out hover:bg-white hover:text-black hover:shadow-[0_0_25px_5px_rgba(249,115,22,0.35)] hover:scale-105 hover:-translate-y-0.5';

const BookCallButton: React.FC<Props> = ({ className = '', to = '/contact', onClick, children }) => {
  const label = children ?? 'BOOK A CALL';
  if (onClick) {
    return (
      <Button onClick={onClick} className={`${baseClasses} ${className}`}>
        {label}
      </Button>
    );
  }
  return (
    <Link to={to} className={`${baseClasses} ${className}`}>
      {label}
    </Link>
  );
};

export default BookCallButton;