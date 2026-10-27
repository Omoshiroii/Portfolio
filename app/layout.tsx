import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taha Zerrad | The Gotham Times',
  description: 'Taha Zerrad, fourth-year EMSI engineering student and full-stack developer aspiring to specialize in cybersecurity. Projects, experience, certifications, and CV.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
