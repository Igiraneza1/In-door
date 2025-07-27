'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const Navbar = dynamic(() => import('../navbar/page'), { ssr: false });
const Footer = dynamic(() => import('../footer/page'), { ssr: false });

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

