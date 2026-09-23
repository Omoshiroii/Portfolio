import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taha Zerrad | The Gotham Times',
  description: 'The independent portfolio of Taha Zerrad. An engineering student exploring software, AI and cloud, one idea and one commit at a time.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
