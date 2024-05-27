import React, { FC, ReactNode } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';

interface MainLayoutProps {
  children: Readonly<ReactNode>;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="dark:bg-dark dark:text-white min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
