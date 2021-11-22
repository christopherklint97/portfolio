export default function Footer() {
  return (
    <footer className="absolute bottom-0 flex justify-center w-full p-5 bg-gray-300 dark:bg-gray-700">
      <div className="flex flex-row justify-between w-36">
        <a
          href="https://www.linkedin.com/in/christopherklint/"
          className="mt-0 text-gray-700 dark:text-gray-200"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/christopherklint97"
          className="mt-0 text-gray-700 dark:text-gray-200"
        >
          Github
        </a>
      </div>
    </footer>
  );
}
