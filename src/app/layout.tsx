import "./globals.css";
import { Poppins } from "next/font/google";
import { NextAuthProvider } from "@/providers/auth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Travel Booking",
  description: "Sistema de viagens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <h1>Header</h1>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
