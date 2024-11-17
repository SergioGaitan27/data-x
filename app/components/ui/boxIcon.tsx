import React from 'react';

interface BoxIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  height?: number;
  width?: number;
  isSelected?: boolean;
  isIndeterminate?: boolean;
  disableAnimation?: boolean;
}

export const BoxIcon: React.FC<BoxIconProps> = ({
  size,
  height,
  width,
  isSelected,
  isIndeterminate,
  disableAnimation,
  ...otherProps
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path d="M21 16.5V7.5L12 2L3 7.5V16.5L12 22L21 16.5ZM12 4.21L18.6 8L12 11.79L5.4 8L12 4.21ZM5 9.97L11 13.18V19.79L5 16.18V9.97ZM13 19.79V13.18L19 9.97V16.18L13 19.79Z" />
    </svg>
  );
};
