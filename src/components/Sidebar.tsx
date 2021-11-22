import Link from "next/link";
import { useEffect, useRef } from "react";

type Props = {
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
};

export default function Sidebar({ setIsSidebarOpen }: Props) {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (node.current && !node.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={node}
      className="fixed top-0 z-10 w-48 h-screen p-6 bg-gray-100 shadow dark:bg-gray-800"
    >
      <ul>
        <li className="mt-3">
          <Link href="/blog">
            <a className="text-gray-700 dark:text-gray-200">Blog</a>
          </Link>
        </li>
        <li className="mt-3">
          <Link href="/about">
            <a className="text-gray-700 dark:text-gray-200">About</a>
          </Link>
        </li>
        <li className="mt-3">
          <Link href="/contact">
            <a className="text-gray-700 dark:text-gray-200">Get in touch</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
