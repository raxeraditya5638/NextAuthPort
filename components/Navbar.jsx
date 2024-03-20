"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Style from "../Styles/Navbar.module.css";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="nav bg-green-500">
        <nav className="flex items-center justify-between py-4 px-4">
          <div
            className="Left flex items-center justify-between text-2xl text-white"
            id={Style.Left}
          >
            <div className="img">
              <Image
                alt="IMG"
                src="/Images/img.jpg"
                width={30}
                height={30}
                className="rounded-full"
              ></Image>
            </div>
            <div className="link hidden sm:inline">
              <Link href={"/"}>Aditya</Link>
            </div>
          </div>
          <div
            className="Right hidden sm:flex justify-between items-center text-2xl"
            id={Style.Right}
          >
            <ul className="flex justify-between items-center text-2xl">
              <li>
                <button>
                  <Link
                    href={"/contactus"}
                    className="rounded-xl text-white hover:underline"
                  >
                    Contact Us
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <Link
                    href={"/development"}
                    className="rounded-xl text-white hover:underline"
                  >
                    Deveplopment
                  </Link>
                </button>
              </li>
              <li>
                {session ? (
                  <button>
                    <Link
                      onClick={() => {
                        signOut();
                      }}
                      href={"/"}
                      className="rounded-xl text-white hover:underline"
                    >
                      Lgout
                    </Link>
                  </button>
                ) : (
                  <button>
                    <Link
                      href={"/login"}
                      className="rounded-xl text-white hover:underline"
                    >
                      Login
                    </Link>
                  </button>
                )}
              </li>
            </ul>
          </div>
          <div className="ham sm:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <div className="main">
                  <span className="text-white text-2xl">×</span>
                </div>
              ) : (
                <Image
                  src={"/Images/login.svg"}
                  alt="logo"
                  width={32}
                  height={32}
                />
              )}
            </button>
          </div>
          {/* Mobile Menu */}
          {isOpen && (
            <div className="w-screen h-screen fixed  z-10 top-0 left-0 bg-white flex justify-between">
              <div className="sm:hidden mt-4 flex flex-col items-start">
                <button onClick={toggleMenu}>
                  <Link href={"/"} className="block text-black py-2 px-4">
                    Home
                  </Link>
                </button>
                <button onClick={toggleMenu}>
                  <Link
                    href={"/contactus"}
                    className="block text-black py-2 px-4"
                  >
                    Contactus
                  </Link>
                </button>
                <button onClick={toggleMenu}>
                  <Link
                    href={"/development"}
                    className="block text-black py-2 px-4"
                  >
                    Development
                  </Link>
                </button>
                {session ? (
                  <button onClick={toggleMenu}>
                    <Link
                      href={"/login"}
                      className="block text-black py-2 px-4"
                    >
                      Login
                    </Link>
                  </button>
                ) : (
                  <button onClick={toggleMenu}>
                    <Link
                      href={"/register"}
                      className="block text-black py-2 px-4"
                    >
                      Register
                    </Link>
                  </button>
                )}
              </div>
              <div className="btn">
                <button onClick={toggleMenu} className="py-3 px-5 text-4xl">
                  ×
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
