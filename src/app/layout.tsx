import TanstackProvider from "@/components/common/tanstackProvider";
import type { Metadata } from "next";
import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "Social connect",
  description: "social meadia application",
  icons: {
    icon: "/xlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <TanstackProvider>{children}</TanstackProvider>
        <Toaster />
      </body>
    </html>
  );
}
