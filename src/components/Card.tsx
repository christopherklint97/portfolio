import Link from "next/link";

type Props = {
  title: string;
  description: string;
  slug: string;
};

export default function Card({ title, description, slug }: Props) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="flex flex-row mt-6 text-gray-700 border-2 border-gray-100 shadow-md dark:border-gray-600 rounded-2xl dark:text-gray-200">
        <div className="p-4">
          <h3 className="m-0 overflow-hidden overflow-ellipsis">{title}</h3>
          <p className="mt-2 overflow-hidden overflow-ellipsis">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
}
