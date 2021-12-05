import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Card, Emoji } from "../components";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

export default function HomePage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const seo = {
    title: "Fullstack Developer - Christopher Klint",
    description:
      "I'm Chris! I am a Fullstack Developer who specializes in Typescript and React.",
  };

  return (
    <section>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:url" content="https://www.christopherklint.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Head>
      <h1>
        I&apos;m Chris! <Emoji symbol="👋" /> I am a Fullstack Developer who
        specializes in Typescript and React.
      </h1>
      <h2>What I am up to</h2>
      <p>
        Currenty working at Telness Tech focusing on the frontend (React,
        Next.js, Typescript). Before this I was at Bencha working on the same
        frontend tech stack, alongside MongoDB, Node, and Google Cloud.
      </p>
      <h2>Here are some of my writings</h2>
      {posts.map((post: any) => (
        <Card
          key={post.title}
          title={post.title}
          description={post.subheader}
          slug={post.slug}
        />
      ))}
      <h2>Side projects</h2>
      <p>
        Coming soon... <Emoji symbol="😉" />
      </p>
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
