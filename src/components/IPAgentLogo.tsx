
import React from 'react';

type IPAgentLogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'text' | 'logo-only';
  className?: string;
};

const IPAgentLogo = ({ size = 'md', variant = 'default', className = '' }: IPAgentLogoProps) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const logoSrc = '/ipagent-logo.png';

  if (variant === 'text') {
    return (
      <div className={`flex items-center ${className}`}>
        <img 
          src={logoSrc} 
          alt="IPAgent Logo" 
          className={`mr-2 ${sizeClasses[size]}`} 
        />
        <span className={`font-bold ${textSizeClasses[size]}`}>
          <span className="text-amber-600">IP</span>
          <span className="text-gray-900">Agent</span>
        </span>
      </div>
    );
  }

  if (variant === 'logo-only') {
    return (
      <img 
        src={logoSrc} 
        alt="IPAgent Logo" 
        className={`${sizeClasses[size]} ${className}`} 
      />
    );
  }

  return (
    <img 
      src={logoSrc} 
      alt="IPAgent Logo" 
      className={`${sizeClasses[size]} ${className}`} 
    />
  );
};

export default IPAgentLogo;
