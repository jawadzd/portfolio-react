import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home  from "./pages/Homes.jsx"
import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return saved === "true";
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme:dark)").matches
    );
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
        <Navbar darkMode={darkMode} onToggle={() => setDarkMode((d) => !d)} />
        <main className="max-w-5xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
             {/*<Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <footer className="text-center py-6 text-sm opacity-70">
          © {new Date().getFullYear()} Jawad Zeyneddin
        </footer>
      </div>
    </div>
  );
}
