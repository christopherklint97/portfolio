import Link from "next/link";

export default function Custom404() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>Nothing to see here!</p>
      <Link href="/">Go back home</Link>
    </section>
  );
}
