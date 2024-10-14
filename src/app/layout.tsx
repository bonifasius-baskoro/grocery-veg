import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/utils/provider/QueryProvider";
import ProductSelectProvider from "@/utils/provider/ProductSelectProvider";

const dm_serif = DM_Sans({
  weight: ["100", "200", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <ProductSelectProvider>
          <body className={`${dm_serif.className} antialiased`}>
            {children}
          </body>
        </ProductSelectProvider>
      </ReactQueryProvider>
    </html>
  );
}
