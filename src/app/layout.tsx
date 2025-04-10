import { ReactNode } from "react";

export const metadata = { title: "Auth Demo" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="p-8">{children}</body>
    </html>
  );
}
