import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout() {
  return (
    <div className="briiige-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
