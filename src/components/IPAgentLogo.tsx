
import React from 'react';
import { MessageCircle, Circle, Waves } from 'lucide-react';

type LogoVariant = 'conversation' | 'coaster' | 'simple';

interface IPAgentLogoProps {
  variant?: LogoVariant;
  size?: number;
  className?: string;
}

const IPAgentLogo: React.FC<IPAgentLogoProps> = ({ 
  variant = 'conversation', 
  size = 40,
  className = ''
}) => {
  const brandColor = "#D97706"; // amber-600
  const accentColor = "#FEF3C7"; // amber-100
  const textColor = "#374151"; // gray-700

  // Conversation variant with bubble and waves
  if (variant === 'conversation') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <div className="relative mr-2" style={{ width: size, height: size }}>
          {/* Background circle */}
          <div 
            className="absolute inset-0 rounded-full" 
            style={{ 
              backgroundColor: accentColor,
              border: `2px solid ${brandColor}`,
            }}
          />
          
          {/* Wave lines simulating conversation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Waves 
              size={size * 0.6} 
              color={brandColor} 
              strokeWidth={2}
            />
          </div>
        </div>
        
        <div className="font-bold text-lg flex items-center">
          <span style={{ color: brandColor }}>IPA</span>
          <span style={{ color: textColor }}>gent</span>
        </div>
      </div>
    );
  }
  
  // Coaster variant
  if (variant === 'coaster') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <div className="relative mr-2" style={{ width: size, height: size }}>
          {/* Coaster circle */}
          <div 
            className="absolute inset-0 rounded-full" 
            style={{ 
              backgroundColor: brandColor,
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          />
          
          {/* Inner circle */}
          <div 
            className="absolute"
            style={{ 
              inset: '15%',
              backgroundColor: accentColor,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <MessageCircle 
              size={size * 0.4} 
              color={brandColor} 
              strokeWidth={2} 
              fill={accentColor}
            />
          </div>
        </div>
        
        <div className="font-bold text-lg flex items-center">
          <span style={{ color: brandColor }}>IPA</span>
          <span style={{ color: textColor }}>gent</span>
        </div>
      </div>
    );
  }
  
  // Simple variant
  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className="relative mr-2" style={{ width: size, height: size }}>
        <div 
          className="absolute inset-0 rounded-full" 
          style={{ 
            backgroundColor: accentColor,
            border: `2px solid ${brandColor}`
          }}
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <Circle 
            size={size * 0.5} 
            color={brandColor} 
            strokeWidth={2} 
            fill={brandColor}
          />
        </div>
      </div>
      
      <div className="font-bold text-lg flex items-center">
        <span style={{ color: brandColor }}>IPA</span>
        <span style={{ color: textColor }}>gent</span>
      </div>
    </div>
  );
};

export default IPAgentLogo;
