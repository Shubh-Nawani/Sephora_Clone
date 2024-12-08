import { type ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  return (
    <a 
      href={href} 
      className={`text-gray-700 hover:text-red-500 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}