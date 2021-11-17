import Link from "next/link";
import { MenuIcon } from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/solid";
import nightwind from "nightwind/helper";
import { useTheme } from "next-themes";

type Props = {
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
};

export default function Header({ setIsSidebarOpen }: Props) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    nightwind.beforeTransition();
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <header className="sticky top-0 border-b-2 border-gray-200 border-solid">
      <nav className="flex flex-row justify-between max-w-screen-lg p-4 mx-auto bg-gray-100 dark:bg-gray-800 ">
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
        <div className="flex flex-row justify-end md:w-36">
          <MoonIcon onClick={toggleTheme} className="mr-3 cursor-pointer w-7" />
          <Link href="/contact">
            <a className="hidden mt-0 text-right md:flex">Get in touch</a>
          </Link>
          <MenuIcon
            onClick={() => setIsSidebarOpen(true)}
            className="cursor-pointer w-7 md:hidden"
          />
        </div>
      </nav>
    </header>
  );
}
