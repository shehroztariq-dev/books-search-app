// components/header.tsx

import { Link } from "react-router-dom";
import Search from "./Search";
import CTA from "./CTA";

const Header = ({ searchTerm, setSearchTerm }: HeaderProps) => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="mx-auto container px-4 py-2.5 md:py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
          <Link to={"/"}>
            <div className="flex items-center gap-2 shrink-0">
              <img
                src="/logo.png"
                alt="CineSeek Logo"
                className="h-6 w-6 md:h-8 md:w-8 object-contain"
              />
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-700 whitespace-nowrap">
                Book
                <span className="bg-linear-to-r from-cyan-700 to-cyan-600 bg-clip-text text-transparent">
                  Stack
                </span>
              </h1>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="flex-1 max-w-full md:max-w-md">
              <Search
                className="w-7xl"
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </div>
            <CTA />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
