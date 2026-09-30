import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import DesktopNavigation from "./navbar/DesktopNavigation";
import MobileNavigation from "./navbar/MobileNavigation";
import NavbarActions from "./navbar/NavbarActions";
import NavbarLogo from "./navbar/NavbarLogo";
import NavbarSearch from "./navbar/NavbarSearch";
import WishlistDrawer from "./wishlist/WishlistDrawer";

export default function NaveBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function openWishlist() {
    setMenuOpen(false);
    setWishlistOpen(true);
  }

  function closeWishlist() {
    setWishlistOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((current) => !current);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur-xl">
        <div className="border-b border-zinc-100 bg-zinc-950">
          <div className="page-container flex min-h-9 items-center justify-center text-center text-xs font-medium text-white sm:text-sm">
            <span>Free shipping on orders over $75</span>

            <span className="mx-2 text-zinc-500">•</span>

            <span>Demo storefront</span>
          </div>
        </div>

        <div className="page-container">
          {/* Desktop */}
          <div className="hidden h-20 grid-cols-[1fr_auto_1fr] items-center lg:grid">
            <div className="flex justify-start">
              <NavbarLogo />
            </div>

            <DesktopNavigation />

            <div className="flex items-center justify-end gap-2">
              <NavbarSearch className="w-full max-w-[240px]" />

              <NavbarActions onOpenWishlist={openWishlist} />
            </div>
          </div>

          {/* Mobile / Tablet */}
          <div className="flex h-[68px] items-center justify-between lg:hidden">
            <NavbarLogo onClick={closeMenu} />

            <div className="flex items-center gap-1">
              <NavbarActions
                showAccount={false}
                onOpenWishlist={openWishlist}
              />

              <button
                type="button"
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                onClick={toggleMenu}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100"
              >
                {menuOpen ? (
                  <FaTimes className="text-lg" />
                ) : (
                  <FaBars className="text-lg" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile / Tablet search */}
          <NavbarSearch className="mb-3 lg:hidden" onSearch={closeMenu} />

          <MobileNavigation menuOpen={menuOpen} onClose={closeMenu} />
        </div>
      </header>

      <WishlistDrawer isOpen={wishlistOpen} onClose={closeWishlist} />
    </>
  );
}
