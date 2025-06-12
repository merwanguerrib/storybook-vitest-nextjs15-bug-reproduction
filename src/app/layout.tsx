import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Storybook Vitest Bug Reproduction',
  description: 'Reproduction case for Storybook Vitest addon + Next.js 15 issue',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}