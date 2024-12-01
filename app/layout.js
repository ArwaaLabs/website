import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header"; // Ensure this is a client component
import Footer from "@/components/Footer"; // Ensure this is a client component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header /> {/* Render client component */}
        {children}
        <Footer /> {/* Render client component */}
      </body>
    </html>
  );
}
