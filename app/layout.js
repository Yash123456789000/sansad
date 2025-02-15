import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../lib/Providers";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SANSAD | PPGS",
  description: "PUBLIC POLICY AND GOVERNANVCE SOCIETY",
  icons:{
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <AuthProvider>
          <div className="mx-auto text-white">
            <Navbar />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}