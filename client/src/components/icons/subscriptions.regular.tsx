import { FC } from 'react';
import { IconProps } from '.';

const SubscriptionsRegular: FC<IconProps> = ({ width, height, size = '1em', className }) => {
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
      <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
    </svg>
  );
};

export default SubscriptionsRegular;
