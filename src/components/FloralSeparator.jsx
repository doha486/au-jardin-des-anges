import React from 'react';

export default function FloralSeparator({ className = "" }) {
  return (
    <div className={`floral-separator ${className}`} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2.5rem 0',
      width: '100%',
      opacity: 0.95
    }}>
      <svg 
        width="280" 
        height="34" 
        viewBox="0 0 280 34" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left line */}
        <path d="M10 17H90" stroke="#7D826C" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" opacity="0.6"/>
        
        {/* Left leaf stem */}
        <path d="M90 17C105 17 115 11 125 17" stroke="#7D826C" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M98 15.5C97 12 100 10 103 12.5C102 15 99 16 98 15.5Z" fill="#BFC5AF" stroke="#7D826C" strokeWidth="0.8" />
        <path d="M112 18.5C114 21.5 118 21 117 18C114.5 18 113 18 112 18.5Z" fill="#BFC5AF" stroke="#7D826C" strokeWidth="0.8" />

        {/* Center Flower & Star */}
        <g transform="translate(140, 17)">
          {/* Small leaves around center */}
          <path d="M-14 -2C-18 -7 -12 -12 -8 -6C-10 -3 -12 -2 -14 -2Z" fill="#BFC5AF" stroke="#7D826C" strokeWidth="0.8" />
          <path d="M14 -2C18 -7 12 -12 8 -6C10 -3 12 -2 14 -2Z" fill="#BFC5AF" stroke="#7D826C" strokeWidth="0.8" />

          {/* Central Flower */}
          <circle cx="0" cy="0" r="4.5" fill="#E8B7B5" stroke="#7D826C" strokeWidth="0.8" />
          <circle cx="0" cy="-6" r="3.5" fill="#F8F5F1" stroke="#E8B7B5" strokeWidth="0.8" />
          <circle cx="6" cy="0" r="3.5" fill="#F8F5F1" stroke="#E8B7B5" strokeWidth="0.8" />
          <circle cx="0" cy="6" r="3.5" fill="#F8F5F1" stroke="#E8B7B5" strokeWidth="0.8" />
          <circle cx="-6" cy="0" r="3.5" fill="#F8F5F1" stroke="#E8B7B5" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="2.5" fill="#D6B06B" />

          {/* Gold Sparkle / Star top right */}
          <path d="M14 -12 L15 -9 L18 -8 L15 -7 L14 -4 L13 -7 L10 -8 L13 -9 Z" fill="#D6B06B" />
        </g>

        {/* Right leaf stem */}
        <path d="M155 17C165 23 175 17 190 17" stroke="#7D826C" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M168 18.5C167 21.5 170 22 173 19.5C172 17 169 18 168 18.5Z" fill="#BFC5AF" stroke="#7D826C" strokeWidth="0.8" />
        <path d="M182 15.5C184 12.5 188 13 187 16C184.5 16 183 16 182 15.5Z" fill="#BFC5AF" stroke="#7D826C" strokeWidth="0.8" />

        {/* Right line */}
        <path d="M190 17H270" stroke="#7D826C" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" opacity="0.6"/>
      </svg>
    </div>
  );
}
