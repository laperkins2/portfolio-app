import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio App',
  description: 'A basic portfolio setup',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-100">
          <nav className="flex justify-center w-100 ">
            <Link className="m-3" href="/">
              Home
            </Link>
            <Link className="m-3" href="/about">
              About
            </Link>
            <Link className="m-3" href="/projects">
              Projects
            </Link>
            <Link className="m-3" href="/contact">
              Contact
            </Link>
          </nav>
        </header>
        {children}
        <footer className="text-center">&copy; Codex January Cohort</footer>
      </body>
    </html>
  );
}
