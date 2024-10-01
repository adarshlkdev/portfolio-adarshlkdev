
import { Cabin } from "next/font/google"
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';


const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - adarshlkdev",
  description: "Portfolio website of Adarsh L K made with NextJS and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cabin.className}>
        {children}
        <Analytics mode={'production'} />
      </body>
    </html>
  );
}


