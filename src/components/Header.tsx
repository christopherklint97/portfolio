import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 border-b-2 border-gray-200 border-solid">
      <nav className="flex flex-row justify-between max-w-screen-lg p-4 mx-auto bg-gray-100 ">
        <Link href="/">
          <a className="mt-0 w-36">Christopher Klint</a>
        </Link>
        <ul className="flex flex-row justify-between w-28">
          <li>Blog</li>
          <li>About</li>
        </ul>
        <Link href="/contact">
          <a className="mt-0 text-right w-36">Get in touch</a>
        </Link>
      </nav>
    </header>
  );
}
