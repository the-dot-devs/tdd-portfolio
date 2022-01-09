import { Fragment } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useState, useEffect, useRef } from "react";

import { Disclosure, Dialog, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Burger from "../burger.js/burger";
import Menu from "../menu.js/menu";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export default function Navbar() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setMenuOpen(false));

  useEffect(() => {
    const scrollYPosition = window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setScrollDirection(styles.passive_nav);
      }

      if (window.scrollY > scrollHeight) {
        setScrollDirection(styles.past_max_nav);
      }

      if (window.scrollY < scrollHeight) {
        setScrollDirection(styles.active_nav);
      }

      setScrollHeight(window.scrollY);
    });

    return () => scrollYPosition;
  }, [scrollHeight]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav className={`fixed  w-full py-4 z-50 ${scrollDirection} `} ref={node}>
      <div className="max-w-screen-2xl w-full mx-auto px-5 relative flex">
        <div className="text-white text-3xl">{"< T•D />"}</div>
        <div className="hidden sm:block sm:ml-auto">
          <div className="flex space-x-4">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "px-3 py-2 rounded-md text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <Burger
          open={menuOpen}
          setOpen={setMenuOpen}
          className="flex sm:hidden"
        />
      </div>
      <Menu open={menuOpen} setOpen={setMenuOpen} />
    </nav>
  );
}

const links = [
  {
    name: "Services",
    href: "#services",
    current: false,
  },
  {
    name: "About Us",
    href: "#aboutUs",
    current: false,
  },
  {
    name: "Contact",
    href: "/contact",
    current: false,
  },
];

/* 
    <nav
      className={`${
        styles.navbar
      } w-screen py-2 flex justify-center items-center fixed
      
      `}
    >
      <div className="maxWidth-1500 flex grow justify-between">
        <div  mx-5 font-bold text-2xl`}>
          
        </div>
        <div className="flex items-center">
          
        </div>
      </div>
    </nav> */

/*     <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        type="button"
        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </Menu.Button>
        </div>

          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Your Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Sign out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>; */
