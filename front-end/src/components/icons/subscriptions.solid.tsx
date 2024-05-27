import { FC } from 'react';
import { IconProps } from '.';

const SubscriptionsSolid: FC<IconProps> = ({ width, height, size = '1em', className }) => {
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
      <path d="M20 7H4V6h16v1zm2 2v12H2V9h20zm-7 6-5-3v6l5-3zm2-12H7v1h10V3z"></path>
    </svg>
  );
};

export default SubscriptionsSolid;
