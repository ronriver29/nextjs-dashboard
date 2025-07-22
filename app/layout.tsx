import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';
// import { lusitana } from '@/app/ui/fonts';

// export const lusitana = Lusitana({
//   weight: ['400', '700'],
//   subsets: ['latin'],
// });
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );}