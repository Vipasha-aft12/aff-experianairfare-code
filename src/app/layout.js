"use client"
import Header from "@/component/header/Header";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "@/component/footer/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import PromoBanner from "@/component/stickybottomoffer/StickyBottomOffer";
import StickyBottomOffer from "@/component/stickybottomoffer/StickyBottomOffer";



export default function RootLayout({ children }) {

useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');  // loads in browser only
  }, []);

  return (
    <html lang="en">
      <body className="main-body">
       <Header />
        {children}
        <Footer />
        <StickyBottomOffer />
      </body>

    </html>
  );
}
