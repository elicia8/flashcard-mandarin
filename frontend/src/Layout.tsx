import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Layout.css"

export default function Layout({children}: {children: React.ReactNode}) {
  const [light, setLight] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", !light);
  }, [light]);
  return (
    <div>
        <header>
          <button onClick={() => setLight(!light)}>toggle</button>
          <Navbar />
        </header>
        <main className="main">{children}</main>
    </div>
  );
}
