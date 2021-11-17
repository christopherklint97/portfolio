import Link from "next/link";
import { MenuIcon } from "@heroicons/react/outline";

type Props = {
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
};

export default function Header({ setIsSidebarOpen }: Props) {
  return (
    <header className="sticky top-0 border-b-2 border-gray-200 border-solid">
      <nav className="flex flex-row justify-between max-w-screen-lg p-4 mx-auto bg-gray-100 ">
        <Link href="/">
          <a className="mt-0 w-36">Christopher Klint</a>
        </Link>
        <ul className="flex-row justify-between hidden md:flex w-28">
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <Link href="/contact">
          <a className="hidden mt-0 text-right md:flex w-36">Get in touch</a>
        </Link>
        <MenuIcon
          onClick={() => setIsSidebarOpen(true)}
          className="cursor-pointer w-7 md:hidden"
        />
      </nav>
    </header>
  );
}
