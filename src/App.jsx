import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import "./index.css";
import Homepage from "./pages/homepage/Homepage";
import RootLayout from "./components/layout/RootLayout";

gsap.registerPlugin(ScrollTrigger);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [{ path: "/", element: <Homepage /> }],
  },
]);

function App() {
  useEffect(() => {
    // Init Lenis (smooth scroll koji ne kvari CSS sticky)
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    // Syncaj GSAP ScrollTrigger sa Lenisom
    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    // RAF petlja
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // nakon mounta recalculiši triggere
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="fl-page">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
