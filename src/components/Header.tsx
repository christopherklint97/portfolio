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
    <header className="sticky top-0 z-10">
      <nav className="flex flex-row justify-between max-w-screen-xl p-4 mx-auto bg-gray-100 dark:bg-gray-800 ">
        <Link href="/">
          <a className="mt-0 text-gray-700 w-36 dark:text-gray-200">
            Christopher Klint
          </a>
        </Link>
        <div className="flex flex-row justify-end md:w-36">
          <MoonIcon onClick={toggleTheme} className="mr-3 cursor-pointer w-7" />
          <a
            href="mailto:christopher.klint@gmail.com"
            className="hidden mt-0 text-right text-gray-700 md:flex dark:text-gray-200"
          >
            Get in touch
          </a>
          <MenuIcon
            onClick={() => setIsSidebarOpen(true)}
            className="cursor-pointer w-7 md:hidden"
          />
        </div>
      </nav>
    </header>
  );
}
