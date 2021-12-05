import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";

export default function BlogPost({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    title,
    subheader,
    content,
    imageLink,
    imageCaption,
    unsplashLink,
    slug,
  } = post;

  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta name="description" content={subheader} />
        <meta
          property="og:url"
          content={`https://www.christopherklint.com/blog/${slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subheader} />
      </Head>
      <hgroup>
        <h1>{title}</h1>
        <h2 className="mt-2 text-base font-normal">{subheader}</h2>
      </hgroup>
      <div className="mt-12">
        <Image
          src={imageLink}
          width="736"
          height="369"
          objectFit="cover"
          objectPosition="center"
          alt=""
          placeholder="empty"
          className="bg-gray-200 dark:bg-gray-700"
        />
        <a
          href={unsplashLink}
          className="block mx-auto my-0 text-sm text-center"
        >
          {imageCaption}
        </a>
      </div>
      <div className="mt-16" dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug as string) || "";

  const post = getPostBySlug(slug, [
    "title",
    "subheader",
    "createdAt",
    "content",
    "imageLink",
    "imageCaption",
    "unsplashLink",
    "slug",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
