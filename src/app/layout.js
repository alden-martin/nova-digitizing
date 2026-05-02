import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import HighlightBar from "@/components/HighlightBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium Embroidery Digitizing Services in USA | Nova Digitizing",
  description:
    "Get fast and affordable embroidery digitizing, vector art, cap digitizing, and 3D puff services. Starting from $8. Free quote in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased font-body`}
    >
      <body className="min-h-full flex flex-col ">
        <header>
          <HighlightBar />
          <Navbar />
        </header>
        {children}
        <Footer />
        <Script>{`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/693a74098a2e581980985f8d/1jc65ai07';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
  
`}</Script>
      </body>
    </html>
  );
}
