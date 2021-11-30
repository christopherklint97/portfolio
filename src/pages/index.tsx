import { GetStaticProps, InferGetStaticPropsType } from "next";
import Card from "../components/Card";
import { getAllPosts } from "../lib/api";

export default function HomePage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section>
      <h1>I&apos;m Chris. I specialize in Typescript and React.</h1>
      <h2>Here are some of my writings</h2>
      {posts.map((post: any) => (
        <Card
          key={post.title}
          title={post.title}
          description={post.subheader}
          slug={post.slug}
        />
      ))}
    </section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["title", "subheader", "slug"]);

  return {
    props: {
      posts,
    },
  };
};
