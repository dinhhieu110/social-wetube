import { FC } from 'react';
import { IconProps } from '.';

const BellSolid: FC<IconProps> = ({ width, height, size = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      focusable="false"
      fill="currentColor"
      width={width || size}
      height={height || size}
      className={className}
    >
      <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87z"></path>
    </svg>
  );
};

export default BellSolid;
