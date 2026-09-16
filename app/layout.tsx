import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ranjeet Kumar | Software Engineer',
  description: 'Portfolio of Ranjeet Kumar — Full-Stack Developer building real-time and AI-powered experiences.',
  keywords: ['Ranjeet Kumar', 'Software Engineer', 'Full Stack Developer', 'Next.js'],
};
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
