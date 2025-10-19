import React from 'react';
import { Link } from 'react-router-dom';

type AnimatedButtonProps = {
  to?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ to, className = '', onClick }) => {
  const customStyles = `
    .animated-button-tsx { background-color: #1e293b; }
    .animated-button-tsx::before {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      background-color: #f59e0b;
      transition: left 0.35s ease-in-out, right 0.35s ease-in-out;
      z-index: 0;
      left: 56px;
      right: 0;
    }
    .animated-button-tsx:hover::before { left: 0; right: calc(100% - 56px); }
  `;

  const innerContent = (
    <span className="relative z-10 flex h-full items-center">
      <span className="px-4 py-3 text-2xl">+</span>
      <span className="px-6 py-3 tracking-wider">BOOK A CALL</span>
    </span>
  );

  const baseClasses =
    'animated-button-tsx relative inline-flex items-center overflow-hidden rounded-md font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75';

  return (
    <>
      <style>{customStyles}</style>
      {to ? (
        <Link to={to} onClick={onClick} className={`${baseClasses} ${className}`}>
          {innerContent}
        </Link>
      ) : (
        <button onClick={onClick} className={`${baseClasses} ${className}`}>
          {innerContent}
        </button>
      )}
    </>
  );
};

export default AnimatedButton;