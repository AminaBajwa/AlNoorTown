
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HomeSlider from "@/Components/HomeSlider";
const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "Luxury Living at Al Noor Town, Sialkot, Pakistan",
  description: "Experience modern infrastructure and premium lifestyle at Al Noor Town, a premier residential community in Sialkot, Punjab, Pakistan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {/* <HomeSlider/> */}
        {children}
        <Footer/>
        </body>
    </html>
  );
}
