import { FC } from 'react';
import { IconProps } from '.';

const ShortsSolid: FC<IconProps> = ({ width, height, size = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      focusable="false"
      fill="currentColor"
      width={width || size}
      height={height || size}
      className={className}
    >
      <path d="m17.77 10.32-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"></path>
    </svg>
  );
};

export default ShortsSolid;
