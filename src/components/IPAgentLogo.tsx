
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

  if (variant === 'text') {
    return (
      <div className={`flex items-center ${className}`}>
        <div className={`relative ${sizeClasses[size]}`}>
          <div className="absolute inset-0 bg-amber-100 rounded-full"></div>
          <div className="absolute inset-[15%] bg-amber-600 rounded-full"></div>
        </div>
        <span className={`ml-2 font-bold ${textSizeClasses[size]}`}>
          <span className="text-amber-600">IP</span>
          <span className="text-gray-900">Agent</span>
        </span>
      </div>
    );
  }

  if (variant === 'logo-only') {
    return (
      <div className={`relative ${sizeClasses[size]} ${className}`}>
        <div className="absolute inset-0 bg-amber-100 rounded-full"></div>
        <div className="absolute inset-[15%] bg-amber-600 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="absolute inset-0 bg-amber-100 rounded-full"></div>
      <div className="absolute inset-[15%] bg-amber-600 rounded-full"></div>
    </div>
  );
};

export default IPAgentLogo;
