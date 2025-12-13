"use client";
import Hero from "./hero-section/Hero";
import { useEffect } from "react";
import Blobity from "blobity";
import { ScrollerMotion } from "scroller-motion";
import PreLoader from "./animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import NavBar from "./navbar/NavBar";

import dynamic from "next/dynamic";
import Reviews from "./reviews-section/ReviewGrid";
const Work = dynamic(() => import("./work-section/Work"));
const About = dynamic(() => import("./about-section/About"));
const Blog = dynamic(() => import("./blog-section/BlogGrid"));
const Contact = dynamic(() => import("./contact-section/Contact"));
const Footer = dynamic(() => import("./footer/Footer"));

export default function Home() {
  useEffect(() => {
    // Inicializa Blobity con tus opciones
    const blobity = new Blobity(initialBlobityOptions);

    // Para debugging, lo expones en window
    // @ts-ignore
    window.blobity = blobity;

    // Limpieza al desmontar
    return () => {
      blobity.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <PreLoader />
      <NavBar />
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Work />
        <Reviews />
        <About />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
