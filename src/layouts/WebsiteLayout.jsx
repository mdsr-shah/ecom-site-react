import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SearchOverlay from "../components/website/SearchOverlay";
import { Outlet } from "react-router-dom";

export default function WebsiteLayout() {

  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Header
        onSearchClick={() => setSearchOpen(true)}
      />

      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <Outlet />

      <Footer />
    </>
  );
}