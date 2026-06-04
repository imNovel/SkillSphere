"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success('Logged out successfully!');
  };

  const navLinks = (
    <>
      <li>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
      </li>
      <li>
        <Link href="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
      </li>
      {user && (
        <li>
          <Link href="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-black text-lg">
            Skill <span className="font-[#7c3aed]">Sphere</span>{" "}
          </h3>
        </div>

        <ul className="hidden md:flex items-center gap-5 text-sm">
          {navLinks}
        </ul>

        <div className="hidden md:flex gap-4">
          {!user && (
            <ul className="flex items-center text-sm gap-5">
              <li><Link href="/signup">SignUp</Link></li>
              <li><Link href="/signin">SignIn</Link></li>
            </ul>
          )}
          {user && (
            <div className="flex gap-2">
              <Avatar size="sm">
                <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
                <Link href="/profile" className="absolute inset-0" />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button size="sm" variant="danger" onClick={handleSignOut}>Sign Out</Button>
            </div>
          )}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t py-4 px-2 flex flex-col gap-4 text-sm">
          <ul className="flex flex-col gap-3">
            {navLinks}
          </ul>
          <div className="border-t pt-4">
            {!user && (
              <ul className="flex flex-col gap-3">
                <li><Link href="/signup" onClick={() => setMenuOpen(false)}>SignUp</Link></li>
                <li><Link href="/signin" onClick={() => setMenuOpen(false)}>SignIn</Link></li>
              </ul>
            )}
            {user && (
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
                  <Link href="/profile" className="absolute inset-0" onClick={() => setMenuOpen(false)} />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <Button size="sm" variant="danger" onClick={handleSignOut}>Sign Out</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;