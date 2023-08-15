"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ProgressBar
          height="4px"
          color="#FF894F"
          options={{ showSpinner: true }}
          shallowRouting
        />
      </body>
    </html>
  );
}
