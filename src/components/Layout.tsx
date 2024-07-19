"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <div className="bg-background text-primary min-h-screen flex flex-col">
        <header className="py-6">
          <nav className="w-full px-4 md:px-8 flex justify-between items-center">
            <div className="text-2xl font-semibold text-primary">Visionary</div>
            <div className="flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0">
              <button className="font-semibold text-sm md:text-md rounded-sm text-white py-1 px-3 border-card bg-card hover:shadow-sm hover:shadow-card">
                About
              </button>
              <button className="font-semibold text-sm md:text-md rounded-sm text-white py-1 px-3 border-card bg-card hover:shadow-sm hover:shadow-card">
                Work
              </button>
              <button
                onClick={openModal}
                className="font-semibold text-sm md:text-md rounded-sm text-white py-1 px-3 border-card bg-card hover:shadow-sm hover:shadow-card"
              >
                Contact
              </button>
              <ContactModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="py-6 bg-card text-primary w-full">
          <div className="px-4 md:px-8 text-center">
            &copy; 2024 Visionary. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
