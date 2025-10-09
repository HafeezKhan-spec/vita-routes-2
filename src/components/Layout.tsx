import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BackToTop from './BackToTop';
import SiteFooter from './SiteFooter';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default Layout;